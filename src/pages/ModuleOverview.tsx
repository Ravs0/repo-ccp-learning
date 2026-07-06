import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Target } from 'lucide-react'
import { modules } from '../data/lessons'
import LessonSummaryCard from '../components/LessonSummaryCard'
import MetadataPill from '../components/MetadataPill'
import SectionHeader from '../components/SectionHeader'

export default function ModuleOverview() {
  const { moduleId } = useParams()
  const module = modules.find(m => m.id === moduleId)

  if (!module) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
          <Link to="/" className="text-accent-cyan hover:underline">Return to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <MetadataPill
            label={module.region === 'General' ? 'General' : `${module.region} focus`}
            tone="blue"
          />
          {module.difficulty && <MetadataPill label={module.difficulty} tone="slate" />}
          {module.featured && <MetadataPill label="Flagship" tone="green" />}
        </div>
        <h1 className="text-3xl font-bold mb-3">{module.title}</h1>
        <p className="text-gray-400 text-lg mb-6 leading-relaxed max-w-3xl">{module.description}</p>

        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
          {module.estimatedHours && (
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {module.estimatedHours}
            </span>
          )}
          <span>{module.lessons.length} lessons</span>
          {module.audience && <span>{module.audience}</span>}
        </div>

        {module.prerequisites && module.prerequisites.length > 0 && (
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-400 mb-2">Prerequisites</div>
            <div className="flex flex-wrap gap-2">
              {module.prerequisites.map((item) => (
                <MetadataPill key={item} label={item} tone="slate" />
              ))}
            </div>
          </div>
        )}

        {module.outcomes && module.outcomes.length > 0 && (
          <div className="rounded-lg border border-dark-600 bg-dark-800/80 p-5">
            <div className="flex items-center gap-2 text-accent-cyan font-semibold mb-4">
              <Target className="w-5 h-5" />
              <span>By the end of this course you will be able to</span>
            </div>
            <ul className="space-y-3">
              {module.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <SectionHeader eyebrow="Curriculum" title="Lessons" description="Each lesson builds toward the module outcomes." />
        <div className="grid gap-6 md:grid-cols-2">
          {module.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              to={`/dashboard/lesson/${module.id}/${lesson.id}`}
              className="group"
            >
              <LessonSummaryCard lesson={lesson} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
