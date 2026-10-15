/**
 * @template {{ name: string, description: string | null, language: string | null, fork: boolean, topics?: string[] }} T
 * @param {T[]} projects
 * @param {string} query
 * @param {'projects' | 'forks' | 'all'} view
 * @returns {T[]}
 */
export function filterProjects(projects, query, view) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  return projects.filter((project) => {
    if (view === 'projects' && project.fork) return false
    if (view === 'forks' && !project.fork) return false
    const text = [
      project.name,
      project.description,
      project.language,
      ...(project.topics ?? []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
    return terms.every((term) => text.includes(term))
  })
}
