import { useState } from 'react'
import { ChevronRight, ChevronDown, BookOpen, ExternalLink, CheckCircle2, Circle } from 'lucide-react'
import { financeConceptTree, ConceptNode } from '../data/conceptTree'

function ConceptNodeComponent({ node, depth = 0, onNodeClick }: { node: ConceptNode, depth?: number, onNodeClick?: (node: ConceptNode) => void }) {
  const [isExpanded, setIsExpanded] = useState(depth < 1)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className="mb-2">
      <div 
        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all hover:bg-dark-700 ${
          depth === 0 ? 'bg-dark-800 border border-dark-600' : ''
        }`}
        style={{ marginLeft: `${depth * 16}px` }}
        onClick={() => {
          if (hasChildren) setIsExpanded(!isExpanded)
          onNodeClick?.(node)
        }}
      >
        {hasChildren ? (
          isExpanded ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />
        ) : (
          <Circle className="w-4 h-4 text-gray-600" />
        )}
        
        {node.completed ? (
          <CheckCircle2 className="w-4 h-4 text-green-500" />
        ) : (
          <Circle className="w-4 h-4 text-gray-600" />
        )}
        
        <span className={`font-medium ${depth === 0 ? 'text-white' : depth === 1 ? 'text-accent-cyan' : 'text-gray-300'}`}>
          {node.label}
        </span>
        
        {node.relatedLessons && node.relatedLessons.length > 0 && (
          <span title="Related lessons available">
            <BookOpen className="w-4 h-4 text-accent-blue ml-auto" />
          </span>
        )}
      </div>

      {node.description && isExpanded && (
        <div className="ml-6 mt-1 mb-2 text-sm text-gray-400" style={{ marginLeft: `${(depth + 1) * 16}px` }}>
          {node.description}
        </div>
      )}

      {node.externalLinks && isExpanded && node.externalLinks.length > 0 && (
        <div className="ml-6 mb-2 space-y-1" style={{ marginLeft: `${(depth + 1) * 16}px` }}>
          {node.externalLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent-cyan hover:text-white transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              <span>{link.title}</span>
              <span className="text-xs text-gray-500">({link.source})</span>
            </a>
          ))}
        </div>
      )}

      {isExpanded && hasChildren && (
        <div className="mt-1">
          {node.children!.map((child) => (
            <ConceptNodeComponent key={child.id} node={child} depth={depth + 1} onNodeClick={onNodeClick} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ConceptTree() {
  const [selectedNode, setSelectedNode] = useState<ConceptNode | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent">
          Finance Concept Hierarchy
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Explore the interconnected world of finance. Click on concepts to expand their hierarchy, 
          discover related lessons, and access curated external resources.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-dark-800 rounded-xl border border-dark-600 p-6">
            <ConceptNodeComponent node={financeConceptTree} onNodeClick={setSelectedNode} />
          </div>
        </div>

        <div className="lg:col-span-1">
          {selectedNode && (
            <div className="bg-dark-800 rounded-xl border border-dark-600 p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-4 text-white">{selectedNode.label}</h2>
              {selectedNode.description && (
                <p className="text-gray-400 mb-4">{selectedNode.description}</p>
              )}
              
              {selectedNode.externalLinks && selectedNode.externalLinks.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-accent-cyan mb-3">External Resources</h3>
                  <div className="space-y-2">
                    {selectedNode.externalLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <ExternalLink className="w-4 h-4 text-accent-cyan" />
                          <span className="font-medium text-sm text-white">{link.title}</span>
                        </div>
                        <span className="text-xs text-gray-500">Source: {link.source}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedNode.relatedLessons && selectedNode.relatedLessons.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-accent-cyan mb-3">Related Lessons</h3>
                  <div className="space-y-2">
                    {selectedNode.relatedLessons.map((lessonId, idx) => (
                      <div key={idx} className="p-3 bg-dark-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-accent-blue" />
                          <span className="text-sm text-gray-300">{lessonId}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {!selectedNode && (
            <div className="bg-dark-800 rounded-xl border border-dark-600 p-6 sticky top-20">
              <p className="text-gray-400 text-sm">
                Click on a concept in the tree to see its details, external resources, and related lessons.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
