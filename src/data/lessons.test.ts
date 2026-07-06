import { describe, expect, it } from 'vitest'
import { modules } from '../data/lessons'

describe('flagship us-repo module', () => {
  it('exposes premium course metadata for the law-student learning path', () => {
    const module = modules.find((item) => item.id === 'us-repo')

    expect(module).toBeDefined()
    expect(module?.difficulty).toBe('Foundation')
    expect(module?.featured).toBe(true)
    expect(module?.estimatedHours).toBeTruthy()
    expect(module?.audience).toMatch(/law/i)
    expect(module?.outcomes?.length ?? 0).toBeGreaterThanOrEqual(4)
    expect(module?.lessons.length ?? 0).toBeGreaterThanOrEqual(8)
  })

  it('gives every flagship lesson summary, objectives, related terms, and source links', () => {
    const module = modules.find((item) => item.id === 'us-repo')

    expect(module).toBeDefined()

    for (const lesson of module?.lessons ?? []) {
      expect(lesson.summary).toBeTruthy()
      expect(lesson.learningObjectives?.length ?? 0).toBeGreaterThanOrEqual(2)
      expect(lesson.relatedTerms?.length ?? 0).toBeGreaterThanOrEqual(2)
      expect(lesson.furtherReading?.length ?? 0).toBeGreaterThanOrEqual(2)
      expect(lesson.lessonType).toBeTruthy()
    }
  })
})
