import { Target, Timer, Trophy } from 'lucide-react'

interface ProgressPanelProps {
  completedLessons: number
  totalLessons: number
  totalXP: number
  streak: number
}

export default function ProgressPanel({ completedLessons, totalLessons, totalXP, streak }: ProgressPanelProps) {
  const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <div className="rounded-lg border border-dark-600 bg-dark-800 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <Target className="h-5 w-5 text-accent-cyan" />
          <div>
            <div className="font-semibold text-white">Course progress</div>
            <div className="text-sm text-gray-500">{completedLessons} of {totalLessons} lessons complete</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-accent-cyan">{progressPercent}%</div>
      </div>

      <div className="progress-bar mb-5">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-dark-700 p-4">
          <Trophy className="h-4 w-4 text-accent-amber mb-2" />
          <div className="text-lg font-semibold text-white">{totalXP}</div>
          <div className="text-gray-500">XP earned</div>
        </div>
        <div className="rounded-lg bg-dark-700 p-4">
          <Timer className="h-4 w-4 text-accent-green mb-2" />
          <div className="text-lg font-semibold text-white">{streak}</div>
          <div className="text-gray-500">day streak</div>
        </div>
      </div>
    </div>
  )
}
