import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, XCircle, RotateCcw } from 'lucide-react'
import { modules } from '../data/lessons'
import FlowDiagram from '../components/FlowDiagram'

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: JSX.Element[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-white">{line.slice(3)}</h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold mt-6 mb-3 text-accent-cyan">{line.slice(4)}</h3>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="ml-4 mb-2 text-gray-300">{line.slice(2)}</li>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      const cleanLine = line.replace(/\*\*/g, '')
      elements.push(
        <p key={i} className="font-semibold text-white my-4">{cleanLine}</p>
      )
    } else if (line.startsWith('|')) {
      // Table handling - simplified
      if (line.includes('---')) {
        i++
        continue
      }
      const cells = line.split('|').filter(c => c.trim()).map(c => c.trim())
      if (cells.length > 0) {
        elements.push(
          <div key={i} className="overflow-x-auto my-4">
            <div className="flex gap-4 border-b border-dark-500 pb-2">
              {cells.map((cell, j) => (
                <span key={j} className="font-semibold text-accent-cyan min-w-[120px]">{cell}</span>
              ))}
            </div>
          </div>
        )
      }
    } else if (line.startsWith('```')) {
      // Code block
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i} className="bg-dark-700 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono text-gray-300">
          {codeLines.join('\n')}
        </pre>
      )
    } else if (line.trim()) {
      // Check for markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
      const matches = [...line.matchAll(linkRegex)]
      
      if (matches.length > 0) {
        let lastIndex = 0
        const parts: JSX.Element[] = []
        
        matches.forEach((match, idx) => {
          // Add text before link
          if (match.index > lastIndex) {
            parts.push(<span key={`text-${idx}`}>{line.slice(lastIndex, match.index)}</span>)
          }
          // Add link
          parts.push(
            <a 
              key={`link-${idx}`}
              href={match[2]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-cyan hover:text-white underline"
            >
              {match[1]}
            </a>
          )
          lastIndex = match.index + match[0].length
        })
        
        // Add remaining text
        if (lastIndex < line.length) {
          parts.push(<span key={`text-end`}>{line.slice(lastIndex)}</span>)
        }
        
        elements.push(<p key={i} className="mb-4 text-gray-300 leading-relaxed">{parts}</p>)
      } else {
        elements.push(<p key={i} className="mb-4 text-gray-300 leading-relaxed">{line}</p>)
      }
    }
    i++
  }

  return <>{elements}</>
}

export default function LessonPage() {
  const { moduleId, lessonId } = useParams()
  const navigate = useNavigate()
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({})
  const [showResults, setShowResults] = useState(false)

  const module = modules.find(m => m.id === moduleId)
  const lesson = module?.lessons.find(l => l.id === lessonId)

  useEffect(() => {
    setShowQuiz(false)
    setQuizAnswers({})
    setShowResults(false)
    window.scrollTo(0, 0)
  }, [moduleId, lessonId])

  if (!module || !lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/" className="text-accent-cyan hover:underline">Return to Home</Link>
        </div>
      </div>
    )
  }

  const currentIndex = module.lessons.findIndex(l => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? module.lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < module.lessons.length - 1 ? module.lessons[currentIndex + 1] : null

  const handleQuizSelect = (questionIndex: number, optionIndex: number) => {
    if (showResults) return
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }))
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleReset = () => {
    setQuizAnswers({})
    setShowResults(false)
  }

  const score = lesson.quiz.reduce((acc, q, i) => acc + (quizAnswers[i] === q.correctIndex ? 1 : 0), 0)
  const total = lesson.quiz.length

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Link to={`/module/${module.id}`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
          {module.title}
        </Link>
        <span className="text-gray-600">/</span>
        <span className="text-gray-400">Lesson {currentIndex + 1} of {module.lessons.length}</span>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-accent-cyan" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Lesson {currentIndex + 1}</div>
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
          </div>
        </div>
        <p className="text-gray-400">Duration: {lesson.duration}</p>
      </div>

      <div className="prose prose-invert max-w-none mb-8">
        <MarkdownContent content={lesson.content} />
      </div>

      {/* Flow Diagram */}
      {lesson.hasDiagram && lesson.diagramType && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Interactive Flow Diagram</h3>
          <FlowDiagram type={lesson.diagramType} />
        </div>
      )}

      {/* Key Points */}
      <div className="bg-dark-800 border border-dark-600 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-accent-cyan">Key Takeaways</h3>
        <ul className="space-y-2">
          {lesson.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quiz */}
      <div className="mb-8">
        <button
          onClick={() => setShowQuiz(!showQuiz)}
          className="w-full py-4 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
        >
          {showQuiz ? 'Hide Quiz' : 'Take Quiz'}
          {showQuiz ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </button>

        {showQuiz && (
          <div className="mt-6 space-y-6">
            {showResults && (
              <div className={`p-4 rounded-lg ${score === total ? 'bg-accent-green/20 border border-accent-green' : 'bg-accent-amber/20 border border-accent-amber'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    Score: {score}/{total}
                  </span>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 bg-dark-600 hover:bg-dark-500 rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retry
                  </button>
                </div>
              </div>
            )}

            {lesson.quiz.map((q, qi) => (
              <div key={qi} className="bg-dark-800 border border-dark-600 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Question {qi + 1}: {q.question}</h4>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    const isSelected = quizAnswers[qi] === oi
                    const isCorrect = oi === q.correctIndex
                    const showAnswer = showResults
                    
                    let className = 'quiz-option'
                    if (showAnswer) {
                      if (isCorrect) className += ' correct'
                      else if (isSelected && !isCorrect) className += ' incorrect'
                    } else if (isSelected) {
                      className += ' selected'
                    }

                    return (
                      <button
                        key={oi}
                        onClick={() => handleQuizSelect(qi, oi)}
                        className={className}
                        disabled={showResults}
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-accent-cyan">{String.fromCharCode(65 + oi)}.</span>
                          <span>{opt}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
                {showResults && (
                  <div className={`mt-4 p-3 rounded-lg ${quizAnswers[qi] === q.correctIndex ? 'bg-accent-green/10' : 'bg-accent-red/10'}`}>
                    <p className="text-sm">
                      <span className="font-semibold">Explanation: </span>
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {!showResults && (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(quizAnswers).length < lesson.quiz.length}
                className="w-full py-3 bg-accent-green hover:bg-accent-green/90 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answers
              </button>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-dark-600">
        {prevLesson ? (
          <Link
            to={`/lesson/${module.id}/${prevLesson.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous: {prevLesson.title}</span>
            <span className="sm:hidden">Previous</span>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            to={`/lesson/${module.id}/${nextLesson.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-accent-cyan rounded-lg transition-colors"
          >
            <span className="hidden sm:inline">Next: {nextLesson.title}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            to={module.id === 'us-repo' ? '/module/asia-repo' : '/quiz'}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green hover:bg-accent-green/90 rounded-lg transition-colors"
          >
            {module.id === 'us-repo' ? 'Start Asia Module' : 'Take Final Quiz'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
