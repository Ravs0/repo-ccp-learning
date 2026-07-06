import { ExternalLink, FileText, Link as LinkIcon } from 'lucide-react'
import type { ResourceLink } from '../data/modules/types'

interface ResourceLinksProps {
  links?: ResourceLink[]
}

function iconFor(type: ResourceLink['type']) {
  if (type === 'internal') return FileText
  if (type === 'glossary') return LinkIcon
  return ExternalLink
}

export default function ResourceLinks({ links = [] }: ResourceLinksProps) {
  if (links.length === 0) return null

  return (
    <div className="space-y-3">
      {links.map((link) => {
        const Icon = iconFor(link.type)
        const isExternal = link.href.startsWith('http')

        return (
          <a
            key={`${link.label}-${link.href}`}
            href={link.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="flex items-start gap-3 rounded-lg border border-dark-600 bg-dark-800 p-4 text-sm text-gray-300 transition-colors hover:border-accent-cyan hover:text-white"
          >
            <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-cyan" />
            <span>{link.label}</span>
          </a>
        )
      })}
    </div>
  )
}
