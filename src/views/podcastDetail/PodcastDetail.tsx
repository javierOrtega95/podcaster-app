import { useLoaderData } from 'react-router'
import { Card } from '../../components/card/Card'
import { type PodcastDetail as IPodcastDetail } from '../../models/PodcastDetail.model'
import { formatDateToDdMmYyyy } from '../../utils/date'
import { totalSecondsToTimeFormat } from '../../utils/time'
import { PodcastSidebar } from '../components/podcastSidebar/PodcastSidebar'
import './podcastDetail.css'

export function PodcastDetail () {
  const podcastDetail = useLoaderData() as IPodcastDetail

  const { imageUrl, title, author, description, episodes } = podcastDetail

  return (
    <section className='podcast-detail'>
      <PodcastSidebar
        imageUrl={imageUrl}
        title={title}
        author={author}
        description={description}
      />
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
              {episodes.map((episode, index) => {
                return (
                  <tr key={index}>
                    <td>{episode.title}</td>
                    <td>{formatDateToDdMmYyyy(episode.date)}</td>
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
