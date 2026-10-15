import assert from 'node:assert/strict'
import test from 'node:test'
import { filterProjects } from '../src/lib/project-search.mjs'

const projects = [
  {
    name: 'booking-scheduler',
    description: 'Vehicle service appointments',
    language: 'Go',
    topics: ['scheduling'],
    fork: false,
  },
  {
    name: 'code-notify',
    description: 'Desktop notifications for coding agents',
    language: 'Shell',
    topics: ['ai'],
    fork: true,
  },
  {
    name: 'icp-study',
    description: null,
    language: null,
    topics: [],
    fork: false,
  },
]

test('the project view excludes forks, while the forks and all views retain them', () => {
  assert.deepEqual(
    filterProjects(projects, '', 'projects').map((p) => p.name),
    ['booking-scheduler', 'icp-study'],
  )
  assert.deepEqual(
    filterProjects(projects, '', 'forks').map((p) => p.name),
    ['code-notify'],
  )
  assert.equal(filterProjects(projects, '', 'all').length, 3)
})

test('search ignores case and surrounding whitespace and matches across project fields', () => {
  assert.deepEqual(
    filterProjects(projects, '  VEHICLE go  ', 'all').map((p) => p.name),
    ['booking-scheduler'],
  )
  assert.deepEqual(
    filterProjects(projects, 'AI', 'forks').map((p) => p.name),
    ['code-notify'],
  )
})

test('search and repository view combine instead of exposing a fork in the project view', () => {
  assert.deepEqual(filterProjects(projects, 'notifications', 'projects'), [])
})

test('missing metadata and unmatched searches produce usable results without throwing', () => {
  assert.deepEqual(
    filterProjects(projects, 'icp', 'all').map((p) => p.name),
    ['icp-study'],
  )
  assert.deepEqual(filterProjects(projects, 'unlisted', 'all'), [])
})
