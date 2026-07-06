import { CheckCircle2, Clock3 } from 'lucide-react'
import type { Lesson } from '../data/modules/types'
import MetadataPill from './MetadataPill'

interface LessonSummaryCardProps {
  lesson: Lesson
  index: number
}

const lessonTone = {
  concept: 'blue',
  mechanics: 'cyan',
  'market-structure': 'green',
  risk: 'amber',
} as const

export default function LessonSummaryCard({ lesson, index }: LessonSummaryCardProps) {
  return (
    <div className="lesson-card h-full">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-500 mb-2">Lesson {index + 1}</div>
          <h3 className="text-lg font-semibold text-white mb-2">{lesson.title}</h3>
        </div>
        {lesson.lessonType && (
          <MetadataPill label={lesson.lessonType.replace('-', ' ')} tone={lessonTone[lesson.lessonType]} />
        )}
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mb-4">
        {lesson.summary ?? lesson.keyPoints[0]}
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
        <span className="inline-flex items-center gap-2">
          <Clock3 className="w-4 h-4" />
          {lesson.duration}
        </span>
        <span>{lesson.quiz.length} questions</span>
      </div>

      <ul className="space-y-2">
        {(lesson.learningObjectives ?? []).slice(0, 2).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-green" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
