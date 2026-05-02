import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LessonPage from './pages/LessonPage'
import ModuleOverview from './pages/ModuleOverview'
import ComparePage from './pages/ComparePage'
import QuizPage from './pages/QuizPage'
import GlossaryPage from './pages/GlossaryPage'
import SourcesPage from './pages/SourcesPage'
import ConceptTree from './components/ConceptTree'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="module/:moduleId" element={
          <ProtectedRoute>
            <ModuleOverview />
          </ProtectedRoute>
        } />
        <Route path="lesson/:moduleId/:lessonId" element={
          <ProtectedRoute>
            <LessonPage />
          </ProtectedRoute>
        } />
        <Route path="compare" element={
          <ProtectedRoute>
            <ComparePage />
          </ProtectedRoute>
        } />
        <Route path="quiz" element={
          <ProtectedRoute>
            <QuizPage />
          </ProtectedRoute>
        } />
        <Route path="glossary" element={
          <ProtectedRoute>
            <GlossaryPage />
          </ProtectedRoute>
        } />
        <Route path="sources" element={
          <ProtectedRoute>
            <SourcesPage />
          </ProtectedRoute>
        } />
        <Route path="concepts" element={
          <ProtectedRoute>
            <ConceptTree />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  )
}
