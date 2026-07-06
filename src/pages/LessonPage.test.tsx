import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import LessonPage from './LessonPage'

function renderLessonPage() {
  return render(
    <MemoryRouter initialEntries={['/dashboard/lesson/us-repo/lesson-1']}>
      <Routes>
        <Route path="/dashboard/lesson/:moduleId/:lessonId" element={<LessonPage />} />
        <Route path="/dashboard/module/:moduleId" element={<div>Module Overview</div>} />
        <Route path="/dashboard/quiz" element={<div>Quiz Page</div>} />
      </Routes>
    </MemoryRouter>
  )
}

describe('LessonPage', () => {
  it('renders the richer flagship lesson learning scaffolding', () => {
    renderLessonPage()

    expect(screen.getByText('Lesson Summary')).toBeInTheDocument()
    expect(screen.getByText('Learning objectives')).toBeInTheDocument()
    expect(screen.getByText('Related terms')).toBeInTheDocument()
    expect(screen.getByText('Further reading')).toBeInTheDocument()
  })
})
