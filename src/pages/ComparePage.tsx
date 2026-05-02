import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightLeft, Globe, Building2, Scale } from 'lucide-react'
import { modules } from '../data/lessons'

const comparisonData = [
  {
    category: 'Structure',
    us: 'Single CCP (FICC) - monopoly model',
    asia: 'Multiple CCPs across jurisdictions (fragmented)',
    winner: 'Depends on priority: US=efficiency, Asia=resilience'
  },
  {
    category: 'Clearing Bank',
    us: 'Single (BNY Mellon) - concentration risk',
    asia: 'Multiple, jurisdiction-specific banks',
    winner: 'Asia - no single point of failure'
  },
  {
    category: 'Settlement System',
    us: 'Fedwire / Private clearing bank (BNY Mellon)',
    asia: 'Central bank systems (BOJ-Net, MAS, HKMA)',
    winner: 'Asia - direct central bank settlement'
  },
  {
    category: 'Market Depth',
    us: '>$5 trillion daily (deepest globally)',
    asia: 'Varies: Japan deep, others smaller markets',
    winner: 'US - unmatched liquidity'
  },
  {
    category: 'Currency',
    us: 'USD (global reserve currency)',
    asia: 'JPY, SGD, HKD, KRW (local currencies)',
    winner: 'US - reserve status creates global demand'
  },
  {
    category: 'Repo Rates',
    us: 'SOFR-linked, typically positive',
    asia: 'JGB repo can be deeply negative (safe haven)',
    winner: 'Different dynamics - Asia has deflationary episodes'
  },
  {
    category: 'Cross-Border',
    us: 'Limited due to single market focus',
    asia: 'Complex: Connect programs, multiple FX regimes',
    winner: 'US - simpler, Asia has growth potential'
  },
  {
    category: 'Default Management',
    us: 'Standardized FICC waterfall',
    asia: 'Varied: JSCC, CDP, HKSCC each have own rules',
    winner: 'US - consistency, Asia - competition/innovation'
  },
  {
    category: 'Regulatory',
    us: 'Unified SEC/CFTC oversight',
    asia: 'Fragmented across jurisdictions (JFSA, MAS, HKMA)',
    winner: 'US - unified, Asia - tailored to local needs'
  },
  {
    category: 'Systemic Risk',
    us: 'Concentrated in FICC and BNY Mellon',
    asia: 'Distributed across multiple CCPs/clearing banks',
    winner: 'Asia - diversification advantage'
  }
]

export default function ComparePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
          <ArrowRightLeft className="w-8 h-8 text-accent-cyan" />
          U.S. vs. Asia-Pacific Comparison
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Compare the single-CCP U.S. model with the fragmented but resilient Asian multi-CCP landscape.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="lesson-card border-accent-blue/30">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-accent-blue" />
            <h2 className="text-xl font-bold text-accent-blue">United States Model</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            A concentrated, efficient model with FICC as the sole Treasury repo CCP and BNY Mellon as the sole clearing bank. 
            Maximizes standardization and liquidity but creates single points of failure.
          </p>
          <div className="text-sm">
            <span className="text-accent-green font-medium">Pros: </span>
            <span className="text-gray-500">Efficiency, standardization, deep liquidity</span>
          </div>
          <div className="text-sm mt-1">
            <span className="text-accent-red font-medium">Cons: </span>
            <span className="text-gray-500">Concentration risk, moral hazard</span>
          </div>
        </div>

        <div className="lesson-card border-accent-purple/30">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-accent-purple" />
            <h2 className="text-xl font-bold text-accent-purple">Asia-Pacific Model</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            A fragmented but resilient model with multiple CCPs (JSCC, CDP, HKSCC) across jurisdictions. 
            Provides redundancy and competition but creates cross-border complexity.
          </p>
          <div className="text-sm">
            <span className="text-accent-green font-medium">Pros: </span>
            <span className="text-gray-500">Resilience, competition, redundancy</span>
          </div>
          <div className="text-sm mt-1">
            <span className="text-accent-red font-medium">Cons: </span>
            <span className="text-gray-500">Fragmentation, higher costs, complexity</span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="p-4 bg-dark-700 border-b border-dark-600">
          <h3 className="font-semibold flex items-center gap-2">
            <Scale className="w-5 h-5 text-accent-cyan" />
            Detailed Comparison
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Category</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-accent-blue">U.S.</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-accent-purple">Asia-Pacific</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-300">Assessment</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.category} className="border-t border-dark-600 hover:bg-dark-700/50">
                  <td className="py-3 px-4 font-medium text-gray-300">{row.category}</td>
                  <td className="py-3 px-4 text-sm text-gray-400">{row.us}</td>
                  <td className="py-3 px-4 text-sm text-gray-400">{row.asia}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      row.winner.startsWith('US') ? 'bg-accent-blue/20 text-accent-blue' :
                      row.winner.startsWith('Asia') ? 'bg-accent-purple/20 text-accent-purple' :
                      'bg-accent-amber/20 text-accent-amber'
                    }`}>
                      {row.winner}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Module Access */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Link
            key={module.id}
            to={`/dashboard/module/${module.id}`}
            className="lesson-card group"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              module.region === 'US' 
                ? 'bg-accent-blue/20 text-accent-blue' 
                : 'bg-accent-purple/20 text-accent-purple'
            }`}>
              {module.region} Markets
            </div>
            <h3 className="text-lg font-semibold group-hover:text-accent-cyan transition-colors mb-2">
              {module.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{module.description}</p>
            <div className="text-sm text-accent-cyan">
              Explore {module.lessons.length} lessons →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
