import { useState } from 'react'
import { Search, BookOpen, Filter } from 'lucide-react'
import { glossary } from '../data/lessons'

const categories = ['All', ...Array.from(new Set(glossary.map(g => g.category)))]

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredGlossary = glossary.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const grouped = filteredGlossary.reduce((acc, item) => {
    const letter = item.term[0].toUpperCase()
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(item)
    return acc
  }, {} as Record<string, typeof glossary>)

  const sortedLetters = Object.keys(grouped).sort()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <BookOpen className="w-12 h-12 text-accent-cyan mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Glossary</h1>
        <p className="text-gray-400">Key terms and definitions for repo markets and CCPs</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-dark-700 border border-dark-500 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500"
          />
        </div>
        <div className="relative sm:w-48">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-dark-700 border border-dark-500 rounded-lg pl-10 pr-4 py-3 text-white appearance-none"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Glossary Content */}
      <div className="space-y-8">
        {sortedLetters.map(letter => (
          <div key={letter}>
            <h2 className="text-3xl font-bold text-accent-cyan mb-4 sticky top-20 bg-dark-900 py-2">
              {letter}
            </h2>
            <div className="space-y-4">
              {grouped[letter].map(item => (
                <div key={item.term} className="lesson-card">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-white">{item.term}</h3>
                    <span className="text-xs px-2 py-1 bg-dark-600 rounded text-gray-400 whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredGlossary.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No terms found matching your search.
        </div>
      )}
    </div>
  )
}
