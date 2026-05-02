export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface Lesson {
  id: string
  title: string
  duration: string
  content: string
  keyPoints: string[]
  quiz: QuizQuestion[]
  hasDiagram?: boolean
  diagramType?: 'us-flow' | 'asia-flow' | 'comparison'
}

export interface Module {
  id: string
  title: string
  description: string
  region: 'US' | 'Asia' | 'Global' | 'General'
  lessons: Lesson[]
}

export interface GlossaryItem {
  term: string
  definition: string
  category: string
}

export interface SourceItem {
  title: string
  author: string
  url: string
  type: string
  description: string
}
