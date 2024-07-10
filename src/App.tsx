import { useCallback, useMemo, useState } from 'react'
import Card from './components/Card/Card'

import data from './data/data.json'

import './App.css'

function App() {
  const [filtered, setFiltered] = useState<string[]>([])

  const deleteFilter = useCallback((filter: string) => {
    // setFiltered(filtered.filter((fil) => fil !== filter))
    setFiltered((prev) => prev.filter((fil) => fil !== filter))
  }, [])

  const clearFilters = useCallback(() => {
    setFiltered([])
  }, [])

  const filteredJobs = useMemo(() => {
    if (filtered.length === 0) {
      return data
    } else {
      return data.filter((job) => {
        const filters = [job.role, job.level, ...job.languages, ...job.tools]
        return filtered.every((filter) => filters.includes(filter))
      })
    }
  }, [filtered])

  return (
    <>
      <header></header>

      <div className="container-main">
        {filtered.length > 0 && (
          <div className="container-filters">
            <div>
              {filtered.map((filter) => (
                <span key={filter} className="span-filter">
                  {filter}
                  <button onClick={() => deleteFilter(filter)}>
                    <img src="/images/icon-remove.svg" alt="" />
                  </button>
                </span>
              ))}
            </div>
            <button onClick={clearFilters}>Clear</button>
          </div>
        )}
        <main>
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              job={job}
              setFiltered={setFiltered}
              filtered={filtered}
            />
          ))}
          <div className="attribution">
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a href="https://github.com/Rubendvb" target="_blank">
              Rubén
            </a>
            .
          </div>
        </main>
      </div>
    </>
  )
}

export default App
