import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { modules } from '../data/lessons'

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      <div className="mb-8">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
          module.region === 'US' 
            ? 'bg-accent-blue/20 text-accent-blue' 
            : module.region === 'Asia'
            ? 'bg-accent-purple/20 text-accent-purple'
            : module.region === 'Global'
            ? 'bg-accent-green/20 text-accent-green'
            : 'bg-accent-orange/20 text-accent-orange'
        }`}>
          {module.region === 'General' ? 'Finance Fundamentals' : `${module.region} Markets`}
        </div>
        <h1 className="text-3xl font-bold mb-4">{module.title}</h1>
        <p className="text-gray-400 text-lg">{module.description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Lessons</h2>
        {module.lessons.map((lesson, index) => (
          <Link
            key={lesson.id}
            to={`/dashboard/lesson/${module.id}/${lesson.id}`}
            className="lesson-card flex items-start gap-4 group"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-dark-600 rounded-lg flex items-center justify-center font-semibold text-accent-cyan">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold group-hover:text-accent-cyan transition-colors mb-1">
                {lesson.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-2 mb-2">
                {lesson.keyPoints[0]}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {lesson.duration}
                </span>
                <span>{lesson.quiz.length} quiz questions</span>
                {lesson.hasDiagram && <span>• Interactive diagram</span>}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-accent-cyan transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  )
}
