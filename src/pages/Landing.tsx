import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Globe, Scale, Shield, Zap, TrendingUp, Clock, Award } from 'lucide-react'
import { modules } from '../data/lessons'
import AuthButton from '../components/AuthButton'

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
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">Repo & CCP Learning</span>
          </Link>
          <AuthButton />
        </div>
      </nav>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>Interactive Learning Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent">
            Master Financial Markets
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Learn repo markets, central clearing, M&A structures, private equity, and derivatives 
            through interactive lessons and quizzes. Track your progress and build expertise step by step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-lg transition-all border border-dark-500"
            >
              <Scale className="w-4 h-4" />
              View Curriculum
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
            <div className="text-3xl font-bold text-accent-cyan">100%</div>
            <div className="text-sm text-gray-400">Free</div>
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Structured Learning Path</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Our Duolingo-style learning path guides you through concepts step by step. 
            Track your progress, earn XP, and master financial markets at your own pace.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="lesson-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learn at Your Pace</h3>
              <p className="text-gray-400 text-sm">Short, focused lessons that fit your schedule. Pick up where you left off anytime.</p>
            </div>
            <div className="lesson-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-400 text-sm">Visual learning path shows exactly where you are and what's next. Earn XP and level up.</p>
            </div>
            <div className="lesson-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Test Knowledge</h3>
              <p className="text-gray-400 text-sm">Interactive quizzes after each lesson reinforce learning and identify areas to review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-16 px-4 bg-dark-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.slice(0, 4).map((module) => (
              <div
                key={module.id}
                className="lesson-card group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
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
                  <Globe className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{module.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{module.lessons.length} lessons</span>
                  <span>•</span>
                  <span>{module.lessons.reduce((sum, l) => sum + l.quiz.length, 0)} quizzes</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all"
            >
              View All Modules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
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

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of learners mastering financial markets. Free forever, no credit card required.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all hover:scale-105 text-lg"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
