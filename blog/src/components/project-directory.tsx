'use client'

import { useState } from 'react'
import { filterProjects } from '@/lib/project-search.mjs'

type Project = {
  name: string
  description: string | null
  url: string
  language: string | null
  fork: boolean
  archived: boolean
  topics: string[]
}
type View = 'projects' | 'forks' | 'all'

export default function ProjectDirectory({
  projects,
}: {
  projects: Project[]
}) {
  const [query, setQuery] = useState('')
  const [view, setView] = useState<View>('projects')
  const visibleProjects = filterProjects(projects, query, view)
  const views: { value: View; label: string; count: number }[] = [
    {
      value: 'projects',
      label: 'Projects',
      count: projects.filter((project) => !project.fork).length,
    },
    {
      value: 'forks',
      label: 'Forks',
      count: projects.filter((project) => project.fork).length,
    },
    { value: 'all', label: 'All', count: projects.length },
  ]
  const resultLabel =
    view === 'forks'
      ? `fork${visibleProjects.length === 1 ? '' : 's'}`
      : visibleProjects.length === 1
        ? 'repository'
        : 'repositories'

  return (
    <div className="project-directory">
      <div className="directory-toolbar">
        <div
          className="directory-tabs"
          role="group"
          aria-label="Repository type"
        >
          {views.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={view === option.value}
              onClick={() => setView(option.value)}
            >
              {option.label}
              <span>{option.count}</span>
            </button>
          ))}
        </div>
        <div className="project-search">
          <label className="sr-only" htmlFor="project-search">
            Search projects
          </label>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
          <input
            id="project-search"
            type="search"
            placeholder="Search by name, topic, or language…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-controls="repository-list"
          />
        </div>
      </div>
      <p className="results-count" role="status" aria-live="polite">
        Showing {visibleProjects.length} {resultLabel}
        {query.trim() ? ` matching “${query.trim()}”` : ''}
      </p>
      <div className="repository-grid" id="repository-list">
        {visibleProjects.map((project) => (
          <article className="repository-card" key={project.name}>
            <div className="repository-card-header">
              <svg
                className="repository-icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M5 4h13v16H7a2 2 0 0 1-2-2V4Zm0 12h13M8 7h6M8 10h4" />
              </svg>
              <span className="repository-kind">
                {project.fork ? 'Fork' : 'Repository'}
                {project.archived ? ' · Archived' : ''}
              </span>
              <a
                href={project.url}
                aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
                className="repository-arrow"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗
              </a>
            </div>
            <h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </h3>
            <p>
              {project.description ||
                'A public repository from my GitHub collection. Explore the source for details.'}
            </p>
            <div className="repository-card-footer">
              {project.language ? (
                <span className="language-label">
                  <span
                    aria-hidden="true"
                    className={`language-dot language-${project.language.toLowerCase().replace(/[^a-z]/g, '')}`}
                  />
                  {project.language}
                </span>
              ) : (
                <span className="language-label">Source & resources</span>
              )}
              <span>
                GitHub <span aria-hidden="true">↗</span>
              </span>
            </div>
          </article>
        ))}
      </div>
      {visibleProjects.length === 0 && (
        <div className="empty-state">
          <h3>No matching projects.</h3>
          <p>Try another name, topic, or programming language.</p>
          <button
            className="text-link"
            type="button"
            onClick={() => {
              setQuery('')
              setView('all')
            }}
          >
            Clear search and show all repositories{' '}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      )}
    </div>
  )
}
