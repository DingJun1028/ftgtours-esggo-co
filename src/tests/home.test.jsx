import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { LanguageProvider } from '../i18n/LanguageContext';

// Render <Home /> (which needs router + i18n context) into a real DOM node.
// Uses react-dom directly so the suite needs no extra dev dependency.
function renderHome() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(
      <MemoryRouter>
        <LanguageProvider>
          <Home />
        </LanguageProvider>
      </MemoryRouter>,
    );
  });
  return { container, root };
}

describe('FTG Journey - Home Page', () => {
  let rendered;

  beforeEach(() => {
    window.localStorage.clear();
    rendered = renderHome();
  });

  it('renders the full-height hero section', () => {
    const heroSection = rendered.container.querySelector('section[class*="h-screen"]');
    expect(heroSection).not.toBeNull();
  });

  it('renders exactly one h1 in the hero', () => {
    const headings = rendered.container.querySelectorAll('h1');
    expect(headings).toHaveLength(1);
    expect(headings[0].textContent.trim().length).toBeGreaterThan(0);
  });

  it('renders the brand hero banner image', () => {
    const heroImg = rendered.container.querySelector('section[class*="h-screen"] img');
    expect(heroImg).not.toBeNull();
    expect(heroImg.getAttribute('alt')).toContain('墾趣旅遊');
  });

  it('exposes no untranslated translation keys in the hero', () => {
    const hero = rendered.container.querySelector('section[class*="h-screen"]');
    expect(hero.textContent).not.toMatch(/\b(home|nav|footer)\.[a-zA-Z]/);
  });
});
