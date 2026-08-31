import { describe, it, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { Home } from '../pages/Home'

describe('FTG Journey - Home Page', () => {
  beforeEach(() => {
    // 模擬語言環境
    global.fetch = async () => ({
      json: async () => ({})
    })
  })

  it('renders hero section with correct alt text', () => {
    const { container } = render(<Home />)
    const heroSection = container.querySelector('section[class*="h-screen"]')
    expect(heroSection).toBeInTheDocument()
  })

  it('hero section contains expected title', () => {
    const { container } = render(<Home />)
    const title = container.querySelector('h1')
    expect(title).toBeInTheDocument()
  })
})