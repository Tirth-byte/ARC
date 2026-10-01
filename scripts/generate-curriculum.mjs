import fs from 'node:fs'

const source = '/tmp/arc-curriculum.txt'
if (!fs.existsSync(source)) throw new Error('Run pdftotext for the curriculum PDF first.')
const text = fs.readFileSync(source, 'utf8')
const starts = [...text.matchAll(/DAY (\d{2}) - ([^\n]+)/g)]
const ranges = [10, 18, 30, 44, 53, 60, 68, 76, 83, 92]
const phaseIds = ['computation','systems','mathematics','ai','physics','biology','psychology','economics','history','philosophy']

const clean = (value) => value.replace(/CURSED WITH KNOWLEDGE[^\n]*/g, '').replace(/\s+/g, ' ').trim()
const quests = starts.map((match, index) => {
  const day = Number(match[1])
  const block = text.slice(match.index + match[0].length, starts[index + 1]?.index ?? text.length)
  const beforeLearn = block.split(/\n\s*LEARN\s*\n/)[0]
  const title = clean(beforeLearn)
  const learn = clean(block.split(/\n\s*LEARN\s*\n/)[1]?.split(/\n\s*PAPER TASK\s*\n/)[0] ?? '')
  const paperTask = clean(block.split(/\n\s*PAPER TASK\s*\n/)[1]?.split(/\n\s*END-OF-DAY CHECK\s*\n/)[0] ?? '')
  const phaseIndex = ranges.findIndex((end) => day <= end)
  const date = new Date(Date.UTC(2026, 9, day)).toISOString().slice(0, 10)
  const targets = learn.split(/;|\. /).map(clean).filter(Boolean).slice(0, 6)
  const concepts = title.split(/\+|&|,|→| and /i).map(clean).filter(Boolean).slice(0, 5)
  return { id: `quest-${String(day).padStart(2, '0')}`, phaseId: phaseIds[phaseIndex], day, date, title, bigQuestion: title.endsWith('?') ? title : `How does ${title.charAt(0).toLowerCase()}${title.slice(1)} work?`, learningTargets: targets, paperTask, conceptIds: concepts, isBossFight: /boss fight|synthesis/i.test(title) }
})

if (quests.length !== 92) throw new Error(`Expected 92 quests, found ${quests.length}`)
const output = `// Generated from Tirth's fixed Winter Arc 2026 curriculum PDF.\nexport const curriculum = ${JSON.stringify(quests, null, 2)};\n`
fs.mkdirSync('src/data', { recursive: true })
fs.writeFileSync('src/data/curriculum.ts', output)
console.log(`Wrote ${quests.length} fixed quests.`)
