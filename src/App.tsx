import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LessonPage from './pages/LessonPage'
import ModuleOverview from './pages/ModuleOverview'
import ComparePage from './pages/ComparePage'
import QuizPage from './pages/QuizPage'
import GlossaryPage from './pages/GlossaryPage'
import SourcesPage from './pages/SourcesPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="module/:moduleId" element={<ModuleOverview />} />
        <Route path="lesson/:moduleId/:lessonId" element={<LessonPage />} />
        <Route path="compare" element={<ComparePage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="glossary" element={<GlossaryPage />} />
        <Route path="sources" element={<SourcesPage />} />
      </Route>
    </Routes>
  )
}
