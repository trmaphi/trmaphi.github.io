import { execFileSync } from 'node:child_process'
import { writeFile } from 'node:fs/promises'

// Public README summaries for repositories without a GitHub description.
const descriptions = {
  trmaphi:
    'My public profile, engineering interests, and selected professional work.',
  'trmaphi.github.io':
    'The source for this portfolio, built with Next.js and published on GitHub Pages.',
  freqtrade_download_hyperliquid_data:
    'Maintained Hyperliquid market data for Freqtrade, based on FrequentHippos’ data project.',
  'freqtrade-old':
    'A maintained copy of the open-source Freqtrade cryptocurrency trading bot.',
  'bcos-metric-exporter':
    'Prometheus metrics exporter for Ethereum execution and consensus nodes.',
  'next-platform-starter':
    'An exploration of the Netlify Next.js platform starter and its cloud primitives.',
  'staking-play':
    'A Hardhat smart-contract experiment with sample contracts, tests, and deployment scripts.',
}

const projects = []
for (let page = 1; ; page++) {
  const repositories = JSON.parse(
    execFileSync(
      'gh',
      ['api', `users/trmaphi/repos?per_page=100&sort=updated&page=${page}`],
      { encoding: 'utf8' },
    ),
  )
  for (const repository of repositories) {
    if (repository.private || repository.visibility !== 'public') continue
    projects.push({
      name: repository.name,
      description:
        descriptions[repository.name] || repository.description || null,
      url: repository.html_url,
      language: repository.language,
      fork: repository.fork,
      archived: repository.archived,
      topics: repository.topics || [],
    })
  }
  if (repositories.length < 100) break
}

if (!projects.length)
  throw new Error(
    'No public repositories returned; refusing to replace the existing snapshot.',
  )
await writeFile(
  new URL('../src/data/projects.json', import.meta.url),
  JSON.stringify({ updatedAt: new Date().toISOString(), projects }, null, 2) +
    '\n',
)
console.log(`Saved ${projects.length} public repositories.`)
