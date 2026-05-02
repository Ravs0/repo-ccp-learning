import { Link } from 'react-router-dom'
import { CheckCircle, Lock, Star, TrendingUp, Flame, Target, BookOpen } from 'lucide-react'
import { modules } from '../data/lessons'

interface ProgressData {
  completedLessons: Set<string>
  completedQuizzes: Set<string>
  currentModule: string
  totalXP: number
  streak: number
}

// Mock progress data - in production, this would come from Firebase/user state
const mockProgress: ProgressData = {
  completedLessons: new Set(),
  completedQuizzes: new Set(),
  currentModule: 'us-repo',
  totalXP: 0,
  streak: 0
}

function LearningPathNode({ 
  module, 
  lesson, 
  index, 
  isCompleted, 
  isLocked, 
  isCurrent 
}: { 
  module: typeof modules[0]
  lesson: typeof modules[0]['lessons'][0]
  index: number
  isCompleted: boolean
  isLocked: boolean
  isCurrent: boolean
}) {
  return (
    <Link
      to={isLocked ? '#' : `/lesson/${module.id}/${lesson.id}`}
      className={`relative flex items-center gap-4 p-4 rounded-xl transition-all ${
        isLocked 
          ? 'opacity-50 cursor-not-allowed bg-dark-700' 
          : isCompleted 
          ? 'bg-green-900/20 border border-green-700 hover:bg-green-900/30' 
          : isCurrent 
          ? 'bg-accent-blue/20 border-2 border-accent-blue hover:bg-accent-blue/30' 
          : 'bg-dark-700 hover:bg-dark-600'
      }`}
      onClick={(e) => isLocked && e.preventDefault()}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        isCompleted 
          ? 'bg-green-600' 
          : isCurrent 
          ? 'bg-accent-blue' 
          : isLocked 
          ? 'bg-dark-600' 
          : 'bg-dark-500'
      }`}>
        {isCompleted ? (
          <CheckCircle className="w-6 h-6 text-white" />
        ) : isLocked ? (
          <Lock className="w-6 h-6 text-gray-500" />
        ) : (
          <BookOpen className="w-6 h-6 text-white" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-gray-500">Lesson {index + 1}</span>
          {isCompleted && (
            <div className="flex items-center gap-1 text-xs text-green-400">
              <Star className="w-3 h-3 fill-current" />
              <span>+10 XP</span>
            </div>
          )}
        </div>
        <h4 className={`font-semibold ${isCurrent ? 'text-accent-cyan' : 'text-white'}`}>
          {lesson.title}
        </h4>
        <p className="text-sm text-gray-400">{lesson.duration}</p>
      </div>

      {/* Arrow */}
      {!isLocked && (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isCompleted || isCurrent ? 'bg-white/10' : 'bg-dark-600'
        }`}>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </Link>
  )
}

export default function Dashboard() {
  const progress = mockProgress
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0)
  const completedCount = progress.completedLessons.size
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  return (
    <div className="min-h-screen">
      {/* Header Stats */}
      <section className="py-8 px-4 border-b border-dark-600 bg-dark-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Learning Path</h1>
              <p className="text-gray-400">Continue where you left off</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Flame className="w-6 h-6 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold text-orange-500">{progress.streak}</div>
                  <div className="text-xs text-gray-400">Day Streak</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold text-yellow-500">{progress.totalXP}</div>
                  <div className="text-xs text-gray-400">Total XP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="bg-dark-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent-cyan" />
                <span className="font-semibold">Overall Progress</span>
              </div>
              <span className="text-accent-cyan font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-dark-600 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-accent-blue to-accent-cyan h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
              <span>{completedCount} of {totalLessons} lessons completed</span>
              <span>{totalLessons - completedCount} remaining</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-accent-cyan" />
            Learning Path
          </h2>

          {modules.map((module, moduleIndex) => {
            const moduleCompletedLessons = module.lessons.filter(l => 
              progress.completedLessons.has(`${module.id}-${l.id}`)
            ).length
            const moduleProgress = module.lessons.length > 0 
              ? Math.round((moduleCompletedLessons / module.lessons.length) * 100)
              : 0
            const isModuleCurrent = module.id === progress.currentModule
            const isModuleLocked = moduleIndex > 0 && modules[moduleIndex - 1].lessons.some(
              l => !progress.completedLessons.has(`${modules[moduleIndex - 1].id}-${l.id}`)
            )

            return (
              <div key={module.id} className="mb-12">
                {/* Module Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isModuleCurrent 
                        ? 'bg-accent-blue' 
                        : moduleProgress === 100 
                        ? 'bg-green-600' 
                        : isModuleLocked 
                        ? 'bg-dark-600' 
                        : 'bg-dark-700'
                    }`}>
                      {moduleProgress === 100 ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : isModuleLocked ? (
                        <Lock className="w-6 h-6 text-gray-500" />
                      ) : (
                        <BookOpen className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{module.title}</h3>
                      <p className="text-sm text-gray-400">{module.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${
                      moduleProgress === 100 ? 'text-green-400' : isModuleCurrent ? 'text-accent-cyan' : 'text-gray-400'
                    }`}>
                      {moduleProgress}%
                    </div>
                    <div className="text-xs text-gray-500">{moduleCompletedLessons}/{module.lessons.length} lessons</div>
                  </div>
                </div>

                {/* Module Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        moduleProgress === 100 ? 'bg-green-500' : isModuleCurrent ? 'bg-gradient-to-r from-accent-blue to-accent-cyan' : 'bg-dark-600'
                      }`}
                      style={{ width: `${moduleProgress}%` }}
                    />
                  </div>
                </div>

                {/* Lessons */}
                <div className="space-y-3">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const lessonKey = `${module.id}-${lesson.id}`
                    const isLessonCompleted = progress.completedLessons.has(lessonKey)
                    const isLessonLocked = !isModuleCurrent && !isLessonCompleted
                    const isLessonCurrent = isModuleCurrent && !isLessonCompleted && lessonIndex === moduleCompletedLessons

                    return (
                      <LearningPathNode
                        key={lesson.id}
                        module={module}
                        lesson={lesson}
                        index={lessonIndex}
                        isCompleted={isLessonCompleted}
                        isLocked={isLessonLocked}
                        isCurrent={isLessonCurrent}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Recommended Next */}
      {progress.totalXP === 0 && (
        <section className="py-12 px-4 bg-gradient-to-b from-dark-800 to-dark-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6">
              <Target className="w-4 h-4" />
              <span>Recommended for You</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Start Your Learning Journey</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Begin with the fundamentals of repo markets and central clearing. 
              Each lesson builds on the previous one, so start from the top and work your way down.
            </p>
            <Link
              to="/lesson/us-repo/lesson-1"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105"
            >
              Start First Lesson
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
