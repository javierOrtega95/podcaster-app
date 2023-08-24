import { useLoaderData, useParams } from 'react-router'
import { Card } from '../../components/card/Card'
import { type PodcastDetail } from '../../models/PodcastDetail.model'
import { PodcastSidebar } from '../components/podcastSidebar/PodcastSidebar'
import './episodeDetail.css'

export function EpisodeDetail () {
  const podcastDetail = useLoaderData() as PodcastDetail

  const { episodes } = podcastDetail

  const { episodeId } = useParams()

  const episode = episodes.find((episode) => episode.id === episodeId)

  if (episode === null) {
    return <p>Episode not found</p>
  }

  return (
    <section className='episode-detail grid'>
      <PodcastSidebar podcastDetail={podcastDetail} />
      <article className='podcast-audio'>
        <Card>
          <h2 className='title'>{episode?.title}</h2>
          <div className='body'>
            <p className='emphasized'>{episode?.description}</p>
            <div className='border' />
            <audio controlsList='nodownload' controls>
              <source src={episode?.audioUrl} type='audio/mpeg' />
            </audio>
          </div>
        </Card>
      </article>
    </section>
  )
}
