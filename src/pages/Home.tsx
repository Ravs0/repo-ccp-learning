import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Globe, Scale, Shield, Zap } from 'lucide-react'
import { modules } from '../data/lessons'

function FeatureCard({ icon: Icon, title, description }: { icon: typeof BookOpen, title: string, description: string }) {
  return (
    <div className="lesson-card">
      <Icon className="w-8 h-8 text-accent-cyan mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export default function Home() {
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0)
  const totalQuizzes = modules.reduce((sum, m) => sum + m.lessons.reduce((l, lesson) => l + lesson.quiz.length, 0), 0)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>Interactive Learning Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent">
            Repo Markets & CCPs
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Master repurchase agreements and central counterparty clearing across U.S. and Asia-Pacific markets. 
            From bilateral trading to FICC and JSCC—understand the plumbing of the financial system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/module/us-repo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105"
            >
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all border border-dark-500"
            >
              <Scale className="w-4 h-4" />
              Compare Markets
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-dark-600 bg-dark-800/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-accent-cyan">{modules.length}</div>
            <div className="text-sm text-gray-400">Learning Modules</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-cyan">{totalLessons}</div>
            <div className="text-sm text-gray-400">Lessons</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-cyan">{totalQuizzes}</div>
            <div className="text-sm text-gray-400">Quiz Questions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-cyan">2</div>
            <div className="text-sm text-gray-400">Regions Covered</div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Learning Modules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Link
                key={module.id}
                to={`/module/${module.id}`}
                className="lesson-card group hover:border-accent-cyan transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    module.region === 'US' 
                      ? 'bg-accent-blue/20 text-accent-blue' 
                      : 'bg-accent-purple/20 text-accent-purple'
                  }`}>
                    {module.region} Markets
                  </div>
                  <Globe className="w-5 h-5 text-gray-500 group-hover:text-accent-cyan transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-cyan transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{module.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{module.lessons.length} lessons</span>
                  <span>•</span>
                  <span>{module.lessons.reduce((sum, l) => sum + l.quiz.length, 0)} quizzes</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-dark-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Platform Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={BookOpen}
              title="Comprehensive Content"
              description="Detailed lessons covering repo fundamentals, CCP mechanics, U.S. and Asian market structures."
            />
            <FeatureCard
              icon={Zap}
              title="Interactive Diagrams"
              description="Visual flow diagrams showing trade lifecycle from quote to settlement."
            />
            <FeatureCard
              icon={Shield}
              title="Risk Management Focus"
              description="Understand netting, margin, default waterfalls, and systemic risk."
            />
            <FeatureCard
              icon={Globe}
              title="Global Comparison"
              description="Compare U.S. FICC model with Asia's multiple CCP landscape."
            />
            <FeatureCard
              icon={Scale}
              title="Knowledge Testing"
              description="Interactive quizzes to reinforce learning after each lesson."
            />
            <FeatureCard
              icon={BookOpen}
              title="Glossary & Sources"
              description="Comprehensive terminology definitions and academic sources."
            />
          </div>
        </div>
      </section>
    </div>
  )
}
