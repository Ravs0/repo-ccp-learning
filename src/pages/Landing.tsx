import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Globe, Scale, Shield, Zap, Landmark, FileText, Sparkles } from 'lucide-react'
import { modules } from '../data/lessons'
import AuthButton from '../components/AuthButton'

const flagshipModule = modules.find(m => m.flagship)

function FeatureCard({ icon: Icon, title, description }: { icon: typeof BookOpen, title: string, description: string }) {
  return (
    <div className="lesson-card">
      <Icon className="w-8 h-8 text-accent-cyan mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export default function Landing() {
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0)
  const totalQuizzes = modules.reduce((sum, m) => sum + m.lessons.reduce((l, lesson) => l + lesson.quiz.length, 0), 0)

  return (
    <div className="min-h-screen">
      {/* Simple Landing Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-dark-800/95 backdrop-blur-md border-b border-dark-600 z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center">
              <Landmark className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">Repo & CCP Learning</span>
          </Link>
          <AuthButton />
        </div>
      </nav>

      {/* Hero — Flagship Focused */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6">
            <Landmark className="w-4 h-4" />
            <span>Flagship Path: Repo & Central Clearing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent">
            Understand Repo Markets<br />& Central Counterparties
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            A law-student-friendly, end-to-end learning path covering repo mechanics, CCP risk management,
            regulatory frameworks, and real-world case studies — with embedded primary sources and expert commentary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105"
            >
              Start the Flagship Path
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all border border-dark-500"
            >
              <BookOpen className="w-4 h-4" />
              Explore All Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-dark-600 bg-dark-800/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
            <div className="text-3xl font-bold text-accent-cyan">100%</div>
            <div className="text-sm text-gray-400">Free & Open</div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-dark-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-accent-blue text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Why This Exists</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Designed for Law Students & Finance Professionals
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Repo markets and central clearing sit at the heart of global financial infrastructure — yet they remain
            among the least accessible topics for new learners. This platform bridges that gap with a
            <span className="text-white font-medium"> structured, concept-complete learning path</span> that connects
            every building block from basic repo mechanics through to advanced regulatory frameworks.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-dark-700/50 rounded-lg p-5 border border-dark-500">
              <FileText className="w-6 h-6 text-accent-cyan mb-3" />
              <h3 className="font-semibold mb-2">Primary Sources Built In</h3>
              <p className="text-sm text-gray-400">Every lesson links to the actual regulatory texts, central bank publications, and industry reports it draws from.</p>
            </div>
            <div className="bg-dark-700/50 rounded-lg p-5 border border-dark-500">
              <Scale className="w-6 h-6 text-accent-cyan mb-3" />
              <h3 className="font-semibold mb-2">Legal & Regulatory Lens</h3>
              <p className="text-sm text-gray-400">Written with law students in mind — explaining not just what the rules say, but why they were designed that way.</p>
            </div>
            <div className="bg-dark-700/50 rounded-lg p-5 border border-dark-500">
              <Globe className="w-6 h-6 text-accent-cyan mb-3" />
              <h3 className="font-semibold mb-2">Global Perspective</h3>
              <p className="text-sm text-gray-400">Compare U.S. (FICC), European (CCP risk frameworks), and Asian market structures side by side.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Path Highlight */}
      {flagshipModule && (
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-accent-cyan/5 to-accent-blue/5" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-4">
                <Landmark className="w-4 h-4" />
                <span>Flagship Learning Path</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{flagshipModule.title}</h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{flagshipModule.description}</p>
            </div>

            {/* Lessons preview */}
            <div className="space-y-3 mb-10">
              {flagshipModule.lessons.slice(0, 6).map((lesson, i) => (
                <div key={lesson.id} className="flex items-start gap-4 bg-dark-800/60 backdrop-blur-sm rounded-lg p-4 border border-dark-500 hover:border-accent-cyan/30 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-cyan/20 text-accent-cyan flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-white">{lesson.title}</span>
                      {lesson.difficulty && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          lesson.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          lesson.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {lesson.difficulty}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 truncate">{lesson.summary}</p>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2 text-xs text-gray-500">
                    {lesson.estimatedHours && <span>{lesson.estimatedHours}h</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to={`/dashboard/module/${flagshipModule.id}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan hover:bg-accent-blue text-white font-medium rounded-lg transition-all hover:scale-105 text-lg"
              >
                Begin the Flagship Path
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Platform Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={BookOpen}
              title="Comprehensive Curriculum"
              description="From repo mechanics through CCP default waterfalls and regulatory frameworks — no conceptual gaps."
            />
            <FeatureCard
              icon={Zap}
              title="Interactive Diagrams"
              description="Visual flow diagrams showing trade lifecycle from quote to settlement and collateral flows."
            />
            <FeatureCard
              icon={Shield}
              title="Risk Management Deep-Dive"
              description="Netting, margin, default waterfalls, loss allocation, and systemic risk — explained for law students."
            />
            <FeatureCard
              icon={Globe}
              title="Multi-Jurisdiction Coverage"
              description="Compare U.S. FICC, European EMIR/CCP frameworks, and Asia's multi-CCP landscape."
            />
            <FeatureCard
              icon={Scale}
              title="Regulatory Source Embedding"
              description="Every lesson links to the actual texts — BIS PFMI, SEC Release 34-100016, ICMA guidance, and more."
            />
            <FeatureCard
              icon={Landmark}
              title="Glossary & Concept Maps"
              description="Comprehensive terminology, cross-referenced terms, and concept-relationship diagrams."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Repo & CCP?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Free forever. No sign-up required. Built for law students, by practitioners.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105 text-lg"
          >
            Start Learning Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
