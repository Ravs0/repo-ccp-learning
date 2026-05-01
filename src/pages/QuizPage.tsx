import { useState, useEffect } from 'react'
import { HelpCircle, CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react'
import { modules } from '../data/lessons'

export default function QuizPage() {
  const [mode, setMode] = useState<'setup' | 'quiz' | 'results'>('setup')
  const [selectedModule, setSelectedModule] = useState<string>('all')
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [showExplanation, setShowExplanation] = useState(false)

  // Prepare questions
  useEffect(() => {
    const allQuestions: any[] = []
    modules.forEach(module => {
      module.lessons.forEach(lesson => {
        lesson.quiz.forEach((q, qi) => {
          allQuestions.push({
            ...q,
            moduleId: module.id,
            moduleTitle: module.title,
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            id: `${module.id}-${lesson.id}-${qi}`
          })
        })
      })
    })
    setCurrentQuestions(allQuestions)
  }, [])

  const filteredQuestions = selectedModule === 'all' 
    ? currentQuestions 
    : currentQuestions.filter(q => q.moduleId === selectedModule)

  const startQuiz = () => {
    // Shuffle questions
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5).slice(0, 10)
    setCurrentQuestions(shuffled)
    setMode('quiz')
    setCurrentIndex(0)
    setAnswers({})
    setShowExplanation(false)
  }

  const handleAnswer = (optionIndex: number) => {
    if (answers[currentIndex] !== undefined) return
    setAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }))
    setShowExplanation(true)
  }

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setShowExplanation(false)
    } else {
      setMode('results')
    }
  }

  const score = Object.entries(answers).reduce((acc, [idx, ans]) => {
    return acc + (ans === currentQuestions[Number(idx)].correctIndex ? 1 : 0)
  }, 0)

  if (mode === 'setup') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <HelpCircle className="w-12 h-12 text-accent-cyan mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Knowledge Check</h1>
          <p className="text-gray-400">Test your understanding of repo markets and CCPs</p>
        </div>

        <div className="lesson-card">
          <label className="block text-sm font-medium mb-3">Select Content</label>
          <select
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            className="w-full bg-dark-700 border border-dark-500 rounded-lg px-4 py-3 text-white mb-6"
          >
            <option value="all">All Modules ({currentQuestions.length} questions)</option>
            {modules.map(m => {
              const count = currentQuestions.filter(q => q.moduleId === m.id).length
              return (
                <option key={m.id} value={m.id}>{m.title} ({count} questions)</option>
              )
            })}
          </select>

          <button
            onClick={startQuiz}
            className="w-full py-3 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all"
          >
            Start Quiz (10 random questions)
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'results') {
    const percentage = Math.round((score / currentQuestions.length) * 100)
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Trophy className={`w-16 h-16 mx-auto mb-4 ${
            percentage >= 80 ? 'text-accent-green' : 
            percentage >= 60 ? 'text-accent-amber' : 'text-accent-red'
          }`} />
          <h1 className="text-2xl font-bold mb-2">Quiz Complete!</h1>
          <p className="text-4xl font-bold text-accent-cyan mb-2">{score}/{currentQuestions.length}</p>
          <p className={`text-lg ${
            percentage >= 80 ? 'text-accent-green' : 
            percentage >= 60 ? 'text-accent-amber' : 'text-accent-red'
          }`}>
            {percentage}% correct
          </p>
        </div>

        <div className="lesson-card mb-6">
          <h3 className="font-semibold mb-4">Performance Summary</h3>
          <div className="space-y-3">
            {currentQuestions.map((q, i) => {
              const correct = answers[i] === q.correctIndex
              return (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${
                  correct ? 'bg-accent-green/10' : 'bg-accent-red/10'
                }`}>
                  {correct ? (
                    <CheckCircle className="w-5 h-5 text-accent-green" />
                  ) : (
                    <XCircle className="w-5 h-5 text-accent-red" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{q.question}</p>
                    <p className="text-xs text-gray-500">{q.moduleTitle} • {q.lessonTitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <button
          onClick={() => setMode('setup')}
          className="w-full py-3 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Take Another Quiz
        </button>
      </div>
    )
  }

  const currentQ = currentQuestions[currentIndex]
  const isAnswered = answers[currentIndex] !== undefined

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-gray-400">
          Question {currentIndex + 1} of {currentQuestions.length}
        </span>
        <div className="flex items-center gap-2">
          <div className="w-32 h-2 bg-dark-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-cyan transition-all"
              style={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="lesson-card mb-6">
        <div className="text-xs text-gray-500 mb-2">
          {currentQ.moduleTitle} • {currentQ.lessonTitle}
        </div>
        <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>

        <div className="space-y-3">
          {currentQ.options.map((opt: string, i: number) => {
            const isSelected = answers[currentIndex] === i
            const isCorrect = i === currentQ.correctIndex
            let className = 'quiz-option'
            
            if (isAnswered) {
              if (isCorrect) className += ' correct'
              else if (isSelected) className += ' incorrect'
            } else if (isSelected) {
              className += ' selected'
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={className}
                disabled={isAnswered}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-dark-600 flex items-center justify-center font-mono text-sm">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                </div>
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className={`mt-6 p-4 rounded-lg ${
            answers[currentIndex] === currentQ.correctIndex 
              ? 'bg-accent-green/10 border border-accent-green/30' 
              : 'bg-accent-amber/10 border border-accent-amber/30'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {answers[currentIndex] === currentQ.correctIndex ? (
                <CheckCircle className="w-5 h-5 text-accent-green" />
              ) : (
                <XCircle className="w-5 h-5 text-accent-red" />
              )}
              <span className="font-semibold">
                {answers[currentIndex] === currentQ.correctIndex ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            <p className="text-sm text-gray-300">{currentQ.explanation}</p>
          </div>
        )}
      </div>

      {isAnswered && (
        <button
          onClick={nextQuestion}
          className="w-full py-3 bg-accent-blue hover:bg-accent-cyan text-white font-semibold rounded-lg transition-all"
        >
          {currentIndex < currentQuestions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  )
}
