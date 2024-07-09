import { IJob } from '../../@types/jobs'

interface ICard {
  job: IJob
  setFiltered: React.Dispatch<React.SetStateAction<string[]>>
  filtered: string[]
}

export default function Card({ job, setFiltered }: ICard) {
  function selectFilter(filter: string | undefined) {
    setFiltered((prev) => {
      if (!prev.includes(filter as string)) {
        // return prev.filter((item) => item !== filter)
        return [...prev, filter as string]
      }

      return prev
    })
  }

  return (
    <article className={`card ${job.featured && job.new ? 'featured' : ''}`}>
      <div className="card-left">
        <img className="card-img" src={job.logo} alt={`Logo ${job.company}`} />
        <div className="card-top">
          <div className="card-header">
            <span>{job.company}</span>
            <div className="status">
              {job.new && <span className="new">New!</span>}
              {job.featured && <span className="featured">Featured</span>}
            </div>
          </div>
          <div>
            <h2>{job.position}</h2>
          </div>
          <div className="info">
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="card_right">
        <button
          data-role={`${job.role}`}
          className="role"
          onClick={(e) => selectFilter(e.currentTarget.dataset.role)}
        >
          {job.role}
        </button>
        <button
          data-level={`${job.level}`}
          className="level"
          onClick={(e) => selectFilter(e.currentTarget.dataset.level)}
        >
          {job.level}
        </button>
        {job.languages &&
          job.languages.map((language) => (
            <button
              key={language}
              data-languages={`${language}`}
              className="languages"
              onClick={(e) => selectFilter(e.currentTarget.dataset.languages)}
            >
              {language}
            </button>
          ))}

        {job.tools &&
          job.tools.map((tool) => (
            <button
              key={tool}
              data-tools={`${tool}`}
              className="tools"
              onClick={(e) => selectFilter(e.currentTarget.dataset.tools)}
            >
              {tool}
            </button>
          ))}
      </div>
    </article>
  )
}
