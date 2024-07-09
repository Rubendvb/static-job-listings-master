import { IJob } from '../../@types/jobs'

export default function Card({ job }: { job: IJob }) {
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
        <button data-role={`${job.role}`} className="role">
          {job.role}
        </button>
        <button data-level={`${job.level}`} className="level">
          {job.level}
        </button>
        {job.languages &&
          job.languages.map((language) => (
            <button
              key={language}
              data-languages={`${language}`}
              className="languages"
            >
              {language}
            </button>
          ))}

        {job.tools &&
          job.tools.map((tool) => (
            <button key={tool} data-tools={`${tool}`} className="tools">
              {tool}
            </button>
          ))}
      </div>
    </article>
  )
}
