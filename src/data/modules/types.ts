export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface ResourceLink {
  label: string
  href: string
  type?: 'glossary' | 'source' | 'internal'
}

export interface Lesson {
  id: string
  title: string
  duration: string
  content: string
  keyPoints: string[]
  quiz: QuizQuestion[]
  summary?: string
  learningObjectives?: string[]
  relatedTerms?: string[]
  furtherReading?: ResourceLink[]
  lessonType?: 'concept' | 'mechanics' | 'market-structure' | 'risk'
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedHours?: number
  audience?: string
  outcomes?: string[]
  prerequisites?: string[]
  featured?: boolean
  hasDiagram?: boolean
  diagramType?: 'us-flow' | 'asia-flow' | 'comparison'
}

export interface Module {
  id: string
  title: string
  description: string
  region: 'US' | 'Asia' | 'Global' | 'General'
  difficulty?: 'Foundation' | 'Intermediate' | 'Advanced'
  estimatedHours?: string
  audience?: string
  outcomes?: string[]
  prerequisites?: string[]
  featured?: boolean
  flagship?: boolean
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
