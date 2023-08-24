import { useLoaderData } from 'react-router'
import { Card } from '../../components/card/Card'
import { type PodcastDetail as IPodcastDetail } from '../../models/PodcastDetail.model'
import { totalSecondsToTimeFormat } from '../../utils/time'
import { PodcastSidebar } from '../components/podcastSidebar/PodcastSidebar'
import './podcastDetail.css'
import { Link } from 'react-router-dom'

export function PodcastDetail () {
  const podcastDetail = useLoaderData() as IPodcastDetail

  const { id, episodes } = podcastDetail

  return (
    <section className='podcast-detail grid'>
      <PodcastSidebar podcastDetail={podcastDetail} />
      <article className='podcast-episodes'>
        <Card>
          <h2 className='title'>Episodes: {episodes.length}</h2>
        </Card>
        <Card>
          <table border={0} cellSpacing={0} cellPadding={0}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((episode) => {
                return (
                  <tr key={episode.id}>
                    <td>
                      <Link to={`/podcast/${id}/episode/${episode.id}`}>
                        {episode.title}
                      </Link>
                    </td>
                    <td>{episode.date}</td>
                    <td>{totalSecondsToTimeFormat(episode.duration)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Card>
      </article>
    </section>
  )
}
