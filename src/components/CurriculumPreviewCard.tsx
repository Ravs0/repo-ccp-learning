import { ArrowRight, Clock3, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Module } from '../data/modules/types'
import MetadataPill from './MetadataPill'

interface CurriculumPreviewCardProps {
  module: Module
}

export default function CurriculumPreviewCard({ module }: CurriculumPreviewCardProps) {
  return (
    <Link to={`/dashboard/module/${module.id}`} className="lesson-card block h-full group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <MetadataPill label={module.region === 'General' ? 'General' : `${module.region} focus`} tone="blue" />
            {module.difficulty && <MetadataPill label={module.difficulty} tone="slate" />}
            {module.featured && <MetadataPill label="Flagship" tone="green" />}
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-accent-cyan transition-colors">
            {module.title}
          </h3>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-accent-cyan transition-colors" />
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mb-5">{module.description}</p>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
        <span className="inline-flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          {module.lessons.length} lessons
        </span>
        {module.estimatedHours && (
          <span className="inline-flex items-center gap-2">
            <Clock3 className="w-4 h-4" />
            {module.estimatedHours}
          </span>
        )}
      </div>

      {module.outcomes && module.outcomes.length > 0 && (
        <ul className="space-y-2 text-sm text-gray-300">
          {module.outcomes.slice(0, 2).map((outcome) => (
            <li key={outcome}>• {outcome}</li>
          ))}
        </ul>
      )}
    </Link>
  )
}
