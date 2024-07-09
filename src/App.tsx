import Card from './components/Card/Card'

import data from './data/data.json'

import './App.css'
import { useEffect, useState } from 'react'
import { IJob } from './@types/jobs'

function App() {
  const [jobs, setJobs] = useState<IJob[]>([])

  const getJobs = () => {
    setJobs(data)
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <>
      <header></header>
      <main>
        {jobs && jobs.map((job) => <Card key={job.id} job={job} />)}

        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </main>
    </>
  )
}

export default App
