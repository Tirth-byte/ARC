import test from 'node:test'
import assert from 'node:assert/strict'

const phases = [
  { id: 'computation', roman: 'I', name: 'Computation & The Machine' },
  { id: 'systems', roman: 'II', name: 'Internet, Systems & Security' },
  { id: 'mathematics', roman: 'III', name: 'Mathematical Thinking' },
  { id: 'ai', roman: 'IV', name: 'AI & Machine Learning' },
  { id: 'physics', roman: 'V', name: 'Physics & Reality' },
  { id: 'biology', roman: 'VI', name: 'Biology & Evolution' },
  { id: 'psychology', roman: 'VII', name: 'Brain & Psychology' },
  { id: 'economics', roman: 'VIII', name: 'Economics, Society & Institutions' },
  { id: 'history', roman: 'IX', name: 'History & Civilization' },
  { id: 'philosophy', roman: 'X', name: 'Philosophy & Grand Synthesis' },
]

const lanes = [
  { id: 'NOT_STARTED', label: 'TO LEARN', empty: 'Nothing left to learn.' },
  { id: 'LEARNING', label: 'LEARNING', empty: 'Nothing here yet.' },
  { id: 'REVIEW_NEEDED', label: 'REVIEW', empty: 'Nothing to review.' },
  { id: 'MASTERED', label: 'MASTERED', empty: 'Knowledge will collect here.' },
]

const normalize = (status) => {
  if (status === 'MASTERED') return 'MASTERED'
  if (status === 'LEARNING') return 'LEARNING'
  if (['REVIEW_NEEDED', 'ALMOST', 'COMPLETED'].includes(status)) return 'REVIEW_NEEDED'
  return 'NOT_STARTED'
}

const dayForToday = () => {
  const now = new Date()
  const start = new Date(2026, 9, 1)
  const end = new Date(2026, 11, 31, 23, 59)
  if (now < start) return 1
  if (now > end) return 92
  return Math.min(92, Math.floor((now - start) / 86400000) + 1)
}

const fmt = (date) =>
  new Date(`${date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

test('Phase & Lane configuration', () => {
  assert.equal(phases.length, 10, 'There are 10 phases')
  assert.equal(lanes.length, 4, 'There are 4 Kanban lanes')
})

test('Normalize helper correctly maps statuses', () => {
  assert.equal(normalize(undefined), 'NOT_STARTED')
  assert.equal(normalize('NOT_STARTED'), 'NOT_STARTED')
  assert.equal(normalize('LEARNING'), 'LEARNING')
  assert.equal(normalize('REVIEW_NEEDED'), 'REVIEW_NEEDED')
  assert.equal(normalize('COMPLETED'), 'REVIEW_NEEDED')
  assert.equal(normalize('ALMOST'), 'REVIEW_NEEDED')
  assert.equal(normalize('MASTERED'), 'MASTERED')
})

test('Day and date calculation', () => {
  const day = dayForToday()
  assert.ok(day >= 1 && day <= 92, `Today day calculation returns 1-92: ${day}`)
  const formatted = fmt('2026-10-01')
  assert.equal(formatted, 'Oct 1')
})

test('Drop target resolution simulation', () => {
  const currentStatuses = {
    'quest-01': 'LEARNING',
    'quest-02': 'REVIEW_NEEDED',
    'quest-03': 'MASTERED',
  }

  const resolveTargetLane = (overId) => {
    if (lanes.some(l => l.id === overId)) {
      return overId
    }
    if (currentStatuses[overId]) {
      return normalize(currentStatuses[overId])
    }
    return 'NOT_STARTED'
  }

  // Dropping on column directly
  assert.equal(resolveTargetLane('NOT_STARTED'), 'NOT_STARTED')
  assert.equal(resolveTargetLane('LEARNING'), 'LEARNING')
  assert.equal(resolveTargetLane('REVIEW_NEEDED'), 'REVIEW_NEEDED')
  assert.equal(resolveTargetLane('MASTERED'), 'MASTERED')

  // Dropping on card in another column
  assert.equal(resolveTargetLane('quest-01'), 'LEARNING')
  assert.equal(resolveTargetLane('quest-02'), 'REVIEW_NEEDED')
  assert.equal(resolveTargetLane('quest-03'), 'MASTERED')
  assert.equal(resolveTargetLane('quest-99'), 'NOT_STARTED')
})
