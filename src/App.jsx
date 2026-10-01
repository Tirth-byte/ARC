import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  pointerWithin,
  rectIntersection,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { get, set, del, clear } from 'idb-keyval'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Circle,
  CloudUpload,
  Download,
  Import,
  MoreHorizontal,
  Play,
  RotateCcw,
  Search,
  Trash2,
  X,
} from 'lucide-react'
import { curriculum } from './data/curriculum.ts'

export const phases = [
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

export const lanes = [
  { id: 'NOT_STARTED', label: 'TO LEARN', empty: 'Nothing left to learn.' },
  { id: 'LEARNING', label: 'LEARNING', empty: 'Nothing here yet.' },
  { id: 'REVIEW_NEEDED', label: 'REVIEW', empty: 'Nothing to review.' },
  { id: 'MASTERED', label: 'MASTERED', empty: 'Knowledge will collect here.' },
]

export const normalize = (status) => {
  if (status === 'MASTERED') return 'MASTERED'
  if (status === 'LEARNING') return 'LEARNING'
  if (['REVIEW_NEEDED', 'ALMOST', 'COMPLETED'].includes(status)) return 'REVIEW_NEEDED'
  return 'NOT_STARTED'
}

const initial = { statuses: {}, reflections: {}, reviews: [], questions: [], settings: { name: 'Tirth' } }

export const useArc = create(
  persist(
    (setState) => ({
      ...initial,
      setStatus: (id, status) =>
        setState((s) => ({ statuses: { ...s.statuses, [id]: status } })),
      saveReflection: (id, value) =>
        setState((s) => ({ reflections: { ...s.reflections, [id]: value } })),
      importData: (data) => setState({ ...initial, ...data }),
      reset: () => setState(initial),
    }),
    { name: 'arc-winter-2026' }
  )
)

export const dayForToday = () => {
  const now = new Date()
  const start = new Date(2026, 9, 1)
  const end = new Date(2026, 11, 31, 23, 59)
  if (now < start) return 1
  if (now > end) return 92
  return Math.min(92, Math.floor((now - start) / 86400000) + 1)
}

export const fmt = (date) =>
  new Date(`${date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

const imageSrc = (data) =>
  typeof data === 'string' ? data : data ? URL.createObjectURL(data) : ''

const blobToDataUrl = (blob) =>
  new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })

const dataUrlToBlob = async (value) => (await fetch(value)).blob()

export default function App() {
  const statuses = useArc((s) => s.statuses)
  const setStatus = useArc((s) => s.setStatus)

  const [phase, setPhase] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [confirmMaster, setConfirmMaster] = useState(null)
  const [graph, setGraph] = useState(false)
  const [progress, setProgress] = useState(false)
  const [menu, setMenu] = useState(false)
  const [mobileLane, setMobileLane] = useState('NOT_STARTED')
  const [activeId, setActiveId] = useState(null)

  const searchRef = useRef(null)
  const suppressClickUntil = useRef(0)

  // Configure high-fidelity sensors (desktop mouse + mobile touch)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const today = dayForToday()
  const todayQuest = curriculum[today - 1] || curriculum[0]

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
      if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        setQuery('')
        searchRef.current?.blur()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Filter quests
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return curriculum.filter((item) => {
      const matchPhase = phase === 'all' || item.phaseId === phase
      if (!matchPhase) return false
      if (!q) return true
      const searchTarget = `${item.title} ${item.bigQuestion} ${(item.learningTargets || []).join(' ')}`.toLowerCase()
      return searchTarget.includes(q)
    })
  }, [phase, query])

  // Aggregate stats
  const mastered = curriculum.filter((q) => normalize(statuses[q.id]) === 'MASTERED').length
  const learning = curriculum.filter((q) => normalize(statuses[q.id]) === 'LEARNING').length
  const review = curriculum.filter((q) => normalize(statuses[q.id]) === 'REVIEW_NEEDED').length
  const pct = Math.round((mastered / 92) * 100)

  // Move quest helper
  const move = (id, targetStatus) => {
    if (targetStatus === 'MASTERED') {
      setConfirmMaster(id)
    } else {
      setStatus(id, targetStatus)
    }
  }

  // Custom collision detection
  const customCollisionDetection = (args) => {
    const pointerCollisions = pointerWithin(args)
    if (pointerCollisions.length > 0) {
      return pointerCollisions
    }
    const rectCollisions = rectIntersection(args)
    if (rectCollisions.length > 0) {
      return rectCollisions
    }
    return closestCorners(args)
  }

  // Handle Drag Over
  const handleDragStart = ({ active }) => {
    setActiveId(active.id)
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  const handleDragEnd = ({ active, over }) => {
    suppressClickUntil.current = Date.now() + 250
    setActiveId(null)

    if (!over) return

    const activeQuestId = active.id
    const overId = over.id

    // Determine target lane
    let targetLane = null
    if (lanes.some((l) => l.id === overId)) {
      targetLane = overId
    } else {
      const targetQuest = curriculum.find((q) => q.id === overId)
      if (targetQuest) {
        targetLane = normalize(statuses[targetQuest.id])
      } else if (over.data.current?.status) {
        targetLane = over.data.current.status
      }
    }

    if (targetLane) {
      const currentLane = normalize(statuses[activeQuestId])
      if (currentLane !== targetLane) {
        move(activeQuestId, targetLane)
      }
    }
  }

  const openQuest = (q) => {
    if (Date.now() > suppressClickUntil.current) {
      setSelected(q)
    }
  }

  const activeQuest = activeId ? curriculum.find((q) => q.id === activeId) : null
  const todayStatus = normalize(statuses[todayQuest.id])

  return (
    <motion.main
      className="sky-app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="sky-drift" />

      {/* Top Header */}
      <motion.header
        className="top glass"
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.32 }}
      >
        <div className="identity">
          <b>ARC</b>
          <i />
          <span>Cursed With Knowledge</span>
        </div>
        <div className="season">
          <CalendarDays />
          <span>
            <b>Winter Arc</b>
            <small>Oct 1 — Dec 31, 2026</small>
          </span>
        </div>
        <div className="top-actions">
          <button
            className="ring-button"
            onClick={() => setProgress((v) => !v)}
            aria-label="Open progress overview"
          >
            <span className="ring" style={{ '--p': `${pct * 3.6}deg` }} />
            <span>
              <b>Day {String(today).padStart(2, '0')} / 92</b>
              <small>
                {mastered} / 92 mastered · {pct}%
              </small>
            </span>
          </button>
          <button
            className="icon"
            onClick={() => setGraph(true)}
            aria-label="Open analytics panel"
            title="Mastery analytics"
          >
            <BarChart3 />
          </button>
          <button
            className="icon"
            onClick={() => setMenu((v) => !v)}
            aria-label="Open menu"
            title="Settings & Backup"
          >
            <MoreHorizontal />
          </button>
        </div>

        <AnimatePresence>
          {progress && (
            <ProgressPopover
              statuses={statuses}
              mastered={mastered}
              learning={learning}
              review={review}
              onClose={() => setProgress(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {menu && <MenuPopover onClose={() => setMenu(false)} />}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="today glass"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.34 }}
      >
        <div className="greeting">
          <span>Good morning, Tirth.</span>
          <h1>
            What are we
            <br />
            learning today?
          </h1>
          <p>92 days. One question at a time.</p>
        </div>

        <div className="today-card">
          <div className="today-card-content">
            <span className="overline">TODAY · DAY {String(today).padStart(2, '0')}</span>
            <h2>{todayQuest.title}</h2>
            {todayQuest.bigQuestion && todayQuest.bigQuestion !== todayQuest.title && (
              <p className="today-big-q">{todayQuest.bigQuestion}</p>
            )}
            <small>
              <BookOpen /> Phase {phases.find((p) => p.id === todayQuest.phaseId)?.roman} ·{' '}
              {phases.find((p) => p.id === todayQuest.phaseId)?.name}
              <i />
              <CalendarDays /> {fmt(todayQuest.date)}
            </small>
          </div>
          <div className="today-actions">
            <button
              className="primary"
              onClick={() => {
                if (todayStatus === 'NOT_STARTED') {
                  setStatus(todayQuest.id, 'LEARNING')
                }
                setSelected(todayQuest)
              }}
            >
              <Play /> {todayStatus === 'NOT_STARTED' ? 'Start' : 'Continue'}
            </button>
            <button className="text-button" onClick={() => setSelected(todayQuest)}>
              View details <ChevronRight />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Utility Bar */}
      <motion.section
        className="utility"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.16 }}
      >
        <div className="mastery-line">
          <span>Mastery</span>
          <i>
            <b style={{ width: `${pct}%` }} />
          </i>
          <em>
            {mastered} / 92 · {pct}%
          </em>
        </div>

        <div className="phase-chips" role="tablist">
          <button
            className={phase === 'all' ? 'active' : ''}
            onClick={() => setPhase('all')}
            title="All Phases"
          >
            All
          </button>
          {phases.map((p) => (
            <button
              key={p.id}
              title={`Phase ${p.roman} · ${p.name}`}
              className={phase === p.id ? 'active' : ''}
              onClick={() => setPhase(p.id)}
            >
              {p.roman}
            </button>
          ))}
        </div>

        <label className="search" htmlFor="arc-search-input">
          <Search />
          <input
            id="arc-search-input"
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search knowledge..."
          />
          <kbd>⌘K</kbd>
        </label>
      </motion.section>

      {/* Mobile Lane Selector Tabs */}
      <div className="mobile-tabs" role="tablist">
        {lanes.map((l) => {
          const count = visible.filter((q) => normalize(statuses[q.id]) === l.id).length
          return (
            <button
              key={l.id}
              role="tab"
              aria-selected={mobileLane === l.id}
              className={mobileLane === l.id ? 'active' : ''}
              onClick={() => setMobileLane(l.id)}
            >
              <span>{l.label}</span>
              <em>{count}</em>
            </button>
          )
        })}
      </div>

      {/* Kanban Board with Drag and Drop */}
      <DndContext
        sensors={sensors}
        collisionDetection={customCollisionDetection}
        autoScroll={{ threshold: { x: 0.15, y: 0.15 }, acceleration: 8 }}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
        onDragEnd={handleDragEnd}
      >
        <section className="board">
          {lanes.map((lane, index) => {
            const laneItems = visible.filter((q) => normalize(statuses[q.id]) === lane.id)
            return (
              <motion.div
                key={lane.id}
                className={`lane glass ${mobileLane === lane.id ? 'mobile-active' : ''}`}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.04 }}
              >
                <DroppableLane
                  id={lane.id}
                  label={lane.label}
                  empty={lane.empty}
                  items={laneItems}
                  statuses={statuses}
                  today={today}
                  onSelect={openQuest}
                  dragging={!!activeId}
                  activeId={activeId}
                />
              </motion.div>
            )
          })}
        </section>

        {/* Drag Overlay */}
        <DragOverlay dropAnimation={{ duration: 180, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
          {activeQuest ? (
            <QuestCardOverlay quest={activeQuest} today={activeQuest.day === today} />
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Quest Details Drawer */}
      <AnimatePresence>
        {selected && (
          <Detail
            quest={selected}
            onClose={() => setSelected(null)}
            onMove={move}
          />
        )}
      </AnimatePresence>

      {/* Mastered Confirmation Popup */}
      <AnimatePresence>
        {confirmMaster && (
          <MasterConfirm
            quest={curriculum.find((q) => q.id === confirmMaster)}
            onNo={() => {
              setStatus(confirmMaster, 'REVIEW_NEEDED')
              setConfirmMaster(null)
            }}
            onYes={() => {
              setStatus(confirmMaster, 'MASTERED')
              setConfirmMaster(null)
            }}
          />
        )}
      </AnimatePresence>

      {/* Analytics Graph Sheet */}
      <AnimatePresence>
        {graph && <GraphSheet statuses={statuses} onClose={() => setGraph(false)} />}
      </AnimatePresence>
    </motion.main>
  )
}

function DroppableLane({ id, label, empty, items, statuses, today, onSelect, dragging, activeId }) {
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: { status: id, type: 'lane' },
  })

  const dropCopy =
    id === 'LEARNING'
      ? 'DROP TO START LEARNING'
      : id === 'REVIEW_NEEDED'
      ? 'DROP FOR REVIEW'
      : id === 'MASTERED'
      ? 'DROP AS MASTERED'
      : 'DROP TO LEARN'

  return (
    <div ref={setNodeRef} className={`lane-inner ${isOver ? 'over' : ''}`}>
      <header>
        <span className="lane-icon">
          {id === 'NOT_STARTED' ? (
            <BookOpen />
          ) : id === 'LEARNING' ? (
            <Circle />
          ) : id === 'REVIEW_NEEDED' ? (
            <RotateCcw />
          ) : (
            <Check />
          )}
        </span>
        <b>{label}</b>
        <span className="lane-count">{items.length}</span>
      </header>

      <div className="cards">
        <SortableContext items={items.map((q) => q.id)} strategy={verticalListSortingStrategy}>
          {items.length > 0 ? (
            items.map((q) => (
              <QuestCard
                key={q.id}
                quest={q}
                status={normalize(statuses[q.id])}
                today={q.day === today}
                onSelect={onSelect}
                isDraggedActive={activeId === q.id}
              />
            ))
          ) : (
            <div className="empty">
              <span>
                {id === 'MASTERED' ? (
                  <Check />
                ) : id === 'REVIEW_NEEDED' ? (
                  <RotateCcw />
                ) : (
                  <BookOpen />
                )}
              </span>
              <b>{empty}</b>
              <p>
                {id === 'LEARNING'
                  ? 'Drag a topic here when you begin.'
                  : id === 'REVIEW_NEEDED'
                  ? 'Nothing to review.'
                  : id === 'MASTERED'
                  ? 'Knowledge will collect here.'
                  : 'Your queue is clear.'}
              </p>
            </div>
          )}
        </SortableContext>

        {dragging && isOver && <div className="drop-hint">{dropCopy}</div>}
      </div>
    </div>
  )
}

function QuestCard({ quest, status, today, onSelect, isDraggedActive }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: quest.id,
    data: { status, quest, type: 'card' },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <article
      ref={setNodeRef}
      style={style}
      onClick={() => {
        if (!isDragging && !isDraggedActive) {
          onSelect(quest)
        }
      }}
      className={`quest-card ${today ? 'is-today' : ''} ${
        isDragging || isDraggedActive ? 'drag-source' : ''
      }`}
      {...attributes}
      {...listeners}
    >
      <div className="card-meta">
        <span>
          Day {String(quest.day).padStart(2, '0')} <i /> Phase{' '}
          {phases.find((p) => p.id === quest.phaseId)?.roman}
        </span>
        <time>{fmt(quest.date)}</time>
      </div>
      <h3>{quest.title}</h3>
      {quest.bigQuestion && quest.bigQuestion !== quest.title && (
        <p>{quest.bigQuestion}</p>
      )}
      {today && <mark>TODAY</mark>}
    </article>
  )
}

function QuestCardOverlay({ quest, today }) {
  return (
    <article className={`quest-card drag-overlay ${today ? 'is-today' : ''}`}>
      <div className="card-meta">
        <span>
          Day {String(quest.day).padStart(2, '0')} <i /> Phase{' '}
          {phases.find((p) => p.id === quest.phaseId)?.roman}
        </span>
        <time>{fmt(quest.date)}</time>
      </div>
      <h3>{quest.title}</h3>
      {quest.bigQuestion && quest.bigQuestion !== quest.title && (
        <p>{quest.bigQuestion}</p>
      )}
      {today && <mark>TODAY</mark>}
    </article>
  )
}

function Detail({ quest, onClose, onMove }) {
  const existing = useArc((s) => s.reflections[quest.id]) || {}
  const save = useArc((s) => s.saveReflection)
  const currentStatus = normalize(useArc((s) => s.statuses[quest.id]))

  const [form, setForm] = useState({
    understood: '',
    confused: '',
    connections: '',
    newQuestions: [''],
    paperImages: [],
    ...existing,
  })
  const [images, setImages] = useState([])
  const [preview, setPreview] = useState(null)
  const fileRef = useRef(null)

  useEffect(() => {
    Promise.all(
      (form.paperImages || []).map(async (meta) =>
        meta.data ? meta : { ...meta, data: await get(`paper:${meta.id}`) }
      )
    ).then(setImages)
  }, [])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const addFiles = async (files) => {
    const added = []
    for (const file of Array.from(files)) {
      const id = crypto.randomUUID()
      await set(`paper:${id}`, file)
      added.push({ id, name: file.name, date: new Date().toISOString() })
    }
    const next = [...(form.paperImages || []), ...added]
    update('paperImages', next)
    const loaded = await Promise.all(
      added.map(async (meta) => ({ ...meta, data: await get(`paper:${meta.id}`) }))
    )
    setImages((v) => [...v, ...loaded])
  }

  const remove = async (id) => {
    if (id) await del(`paper:${id}`)
    update(
      'paperImages',
      (form.paperImages || []).filter((x) => x.id !== id)
    )
    setImages((v) => v.filter((x) => x.id !== id))
  }

  const saveAll = () => {
    save(quest.id, {
      ...form,
      createdAt: existing.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    onClose()
  }

  return (
    <>
      <motion.div
        className="scrim"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.aside
        className="detail glass"
        initial={{ x: 480, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 480, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 340, damping: 32 }}
      >
        <button className="close" onClick={onClose} aria-label="Close drawer">
          <X />
        </button>
        <span className="overline">
          DAY {String(quest.day).padStart(2, '0')} · PHASE{' '}
          {phases.find((p) => p.id === quest.phaseId)?.roman} · {fmt(quest.date)}
        </span>
        <h2>{quest.title}</h2>

        <section>
          <label>BIG QUESTION</label>
          <p className="big-question">{quest.bigQuestion}</p>
        </section>

        <section>
          <label>LEARNING TARGETS</label>
          <ul>
            {(quest.learningTargets || []).map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>

        {[
          ['understood', 'MY UNDERSTANDING'],
          ['confused', 'CONFUSED ABOUT'],
          ['connections', 'CONNECTIONS'],
        ].map(([key, label]) => (
          <section key={key}>
            <label>{label}</label>
            <textarea
              value={form[key] || ''}
              onChange={(e) => update(key, e.target.value)}
              placeholder="Write a few honest lines…"
            />
          </section>
        ))}

        <section>
          <label>QUESTIONS CREATED</label>
          <textarea
            value={(form.newQuestions || []).join('\n')}
            onChange={(e) => update('newQuestions', e.target.value.split('\n'))}
            placeholder="One question per line…"
          />
        </section>

        <section>
          <label>PAPER</label>
          <div
            className="paper-drop"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault()
              if (e.dataTransfer.files) addFiles(e.dataTransfer.files)
            }}
            onClick={() => fileRef.current?.click()}
          >
            <input
              ref={fileRef}
              hidden
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => e.target.files && addFiles(e.target.files)}
            />
            <CloudUpload />
            <span>
              <b>+ Add paper photo</b>
              <small>Drop here or choose a file</small>
            </span>
          </div>
          {images.length > 0 && (
            <div className="paper-thumbs">
              {images.map((im, i) => (
                <div key={im.id || i}>
                  <button onClick={() => setPreview(im)}>
                    {im.data && <img src={imageSrc(im.data)} alt="Paper work" />}
                  </button>
                  <span>{im.date ? fmt(im.date.slice(0, 10)) : 'Saved paper'}</span>
                  <button
                    className="delete"
                    onClick={() => remove(im.id)}
                    aria-label="Delete image"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <label>STATUS</label>
          <div className="status-row">
            {lanes.map((l) => (
              <button
                key={l.id}
                className={currentStatus === l.id ? 'active' : ''}
                onClick={() => onMove(quest.id, l.id)}
              >
                {l.id === 'NOT_STARTED'
                  ? '○'
                  : l.id === 'LEARNING'
                  ? '◐'
                  : l.id === 'REVIEW_NEEDED'
                  ? '△'
                  : '●'}{' '}
                {l.label}
              </button>
            ))}
          </div>
        </section>

        <button className="primary save" onClick={saveAll}>
          Save changes
        </button>
      </motion.aside>

      {preview && (
        <div className="image-preview" onClick={() => setPreview(null)}>
          <button aria-label="Close preview">
            <X />
          </button>
          <img src={imageSrc(preview.data)} alt="Paper preview" />
        </div>
      )}
    </>
  )
}

function MasterConfirm({ quest, onNo, onYes }) {
  return (
    <motion.div
      className="master-confirm glass"
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.96 }}
      transition={{ duration: 0.2 }}
    >
      <span className="confirm-icon">
        <Check />
      </span>
      <div className="confirm-text">
        <b>Can you explain this without notes?</b>
        <small>{quest?.title || 'Selected quest'}</small>
      </div>
      <div className="confirm-buttons">
        <button className="confirm-btn no" onClick={onNo}>
          Not yet
        </button>
        <button className="confirm-btn yes" onClick={onYes}>
          Yes, mastered
        </button>
      </div>
    </motion.div>
  )
}

function ProgressPopover({ statuses, mastered, learning, review, onClose }) {
  return (
    <motion.div
      className="popover progress-pop glass"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
    >
      <button className="mini-close" onClick={onClose} aria-label="Close popover">
        <X />
      </button>
      <h3>Winter Arc progress</h3>
      <div className="progress-stats">
        <span>
          Mastered <b>{mastered}</b>
        </span>
        <span>
          Learning <b>{learning}</b>
        </span>
        <span>
          Review <b>{review}</b>
        </span>
        <span>
          Not started <b>{92 - mastered - learning - review}</b>
        </span>
      </div>
      <label>PHASE MASTERY</label>
      {phases.map((p) => {
        const qs = curriculum.filter((q) => q.phaseId === p.id)
        const n = qs.filter((q) => normalize(statuses[q.id]) === 'MASTERED').length
        return (
          <div className="phase-row" key={p.id}>
            <span>{p.roman}</span>
            <i>
              <b style={{ width: `${(n / qs.length) * 100}%` }} />
            </i>
            <em>
              {n}/{qs.length}
            </em>
          </div>
        )
      })}
    </motion.div>
  )
}

function MenuPopover({ onClose }) {
  const input = useRef(null)
  const reset = useArc((s) => s.reset)
  const importData = useArc((s) => s.importData)

  const exportAll = async () => {
    const state = useArc.getState()
    const paperImageData = {}
    for (const reflection of Object.values(state.reflections || {})) {
      for (const meta of reflection.paperImages || []) {
        if (meta.id) {
          const blob = await get(`paper:${meta.id}`)
          if (blob) paperImageData[meta.id] = await blobToDataUrl(blob)
        }
      }
    }
    const payload = { ...state, paperImageData }
    const data = JSON.stringify(payload, (_, v) => (typeof v === 'function' ? undefined : v), 2)
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }))
    a.download = 'arc-winter-2026.json'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const importAll = async (file) => {
    const data = JSON.parse(await file.text())
    for (const [id, value] of Object.entries(data.paperImageData || {})) {
      await set(`paper:${id}`, await dataUrlToBlob(value))
    }
    delete data.paperImageData
    importData(data)
    onClose()
  }

  return (
    <motion.div
      className="popover menu-pop glass"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <button onClick={exportAll}>
        <Download /> Export JSON
      </button>
      <button onClick={() => input.current?.click()}>
        <Import /> Import JSON
      </button>
      <input
        hidden
        ref={input}
        type="file"
        accept="application/json"
        onChange={(e) => e.target.files?.[0] && importAll(e.target.files[0])}
      />
      <button
        className="danger"
        onClick={async () => {
          if (confirm('Reset all ARC progress and locally stored paper images?')) {
            await clear()
            reset()
            onClose()
          }
        }}
      >
        <RotateCcw /> Reset data
      </button>
    </motion.div>
  )
}

function GraphSheet({ statuses, onClose }) {
  const history = useMemo(() => {
    let count = 0
    return curriculum.map((q) => {
      if (normalize(statuses[q.id]) === 'MASTERED') count++
      return { day: q.day, value: count, date: fmt(q.date) }
    })
  }, [statuses])

  const counts = { mastered: 0, learning: 0, review: 0 }
  curriculum.forEach((q) => {
    const s = normalize(statuses[q.id])
    if (s === 'MASTERED') counts.mastered++
    else if (s === 'LEARNING') counts.learning++
    else if (s === 'REVIEW_NEEDED') counts.review++
  })

  return (
    <>
      <motion.div
        className="scrim"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.section
        className="graph-sheet glass"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.24 }}
      >
        <button className="close" onClick={onClose} aria-label="Close analytics">
          <X />
        </button>
        <span className="overline">OVERALL</span>
        <div className="analytics-summary">
          <span>
            Mastered <b>{counts.mastered}</b>
          </span>
          <span>
            Learning <b>{counts.learning}</b>
          </span>
          <span>
            Review <b>{counts.review}</b>
          </span>
          <span>
            Remaining <b>{92 - counts.mastered - counts.learning - counts.review}</b>
          </span>
        </div>

        <h2>Mastery over time</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={history}>
              <defs>
                <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#258df4" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#258df4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                tick={{ fontSize: 10, fill: '#627487' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 92]}
                tick={{ fontSize: 10, fill: '#627487' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Area
                dataKey="value"
                stroke="#238bf2"
                strokeWidth={2.5}
                fill="url(#fill)"
                type="monotone"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <label>PHASES</label>
        <div className="graph-phases">
          {phases.map((p) => {
            const qs = curriculum.filter((q) => q.phaseId === p.id)
            const n = qs.filter((q) => normalize(statuses[q.id]) === 'MASTERED').length
            return (
              <div key={p.id}>
                <span>{p.roman}</span>
                <i>
                  <b style={{ width: `${(n / qs.length) * 100}%` }} />
                </i>
                <em>
                  {n}/{qs.length}
                </em>
              </div>
            )
          })}
        </div>
      </motion.section>
    </>
  )
}
