import { ExternalLink, BookOpen, FileText, Globe } from 'lucide-react'
import { sources } from '../data/lessons'

const typeIcons: Record<string, typeof BookOpen> = {
  'Industry Guide': BookOpen,
  'Regulatory Standard': FileText,
  'Official Website': Globe,
  'Academic Paper': FileText,
  'Official Documentation': BookOpen,
  'Regulatory Disclosure': FileText,
  'Research Paper': FileText,
  'Industry Report': BookOpen
}

export default function SourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <BookOpen className="w-12 h-12 text-accent-cyan mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Sources & References</h1>
        <p className="text-gray-400">Academic papers, industry guides, and official documentation</p>
      </div>

      <div className="space-y-4">
        {sources.map((source, i) => {
          const Icon = typeIcons[source.type] || BookOpen
          return (
            <a
              key={i}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="lesson-card group flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-accent-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold group-hover:text-accent-cyan transition-colors">
                    {source.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent-cyan transition-colors flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-400 mb-2">{source.author}</p>
                <p className="text-sm text-gray-500 mb-2">{source.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-dark-600 rounded text-gray-400">
                    {source.type}
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="mt-12 p-6 bg-dark-800 border border-dark-600 rounded-lg">
        <h3 className="font-semibold mb-3">Additional Resources</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• DTCC/FICC official disclosures and rulebooks</li>
          <li>• BIS Committee on Payments and Market Infrastructures (CPMI) reports</li>
          <li>• Federal Reserve Bank of New York repo market primers</li>
          <li>• JPX/JSCC clearing documentation</li>
          <li>• SGX and HKEX clearing disclosures</li>
        </ul>
      </div>
    </div>
  )
}
