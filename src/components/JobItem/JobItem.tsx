import { IJob } from '../../@types/jobs'

interface IJobItem {
  job: IJob
  setFiltered: React.Dispatch<React.SetStateAction<string[]>>
}

export default function JobItem({ job, setFiltered }: IJobItem) {
  return <></>
}
