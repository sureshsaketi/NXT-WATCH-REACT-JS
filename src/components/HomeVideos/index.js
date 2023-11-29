import VideoCard from '../VideoCard'

import {
  HomeVideosContainer,
  NoSearchResultsContainer,
  NoSearchImage,
  NoSearchResultsHeading,
  NoSearchResultsText,
  RetryButton,
} from './styledComponents'

const HomeVideos = props => {
  const {videosList, onRetry} = props
  const videosCount = videosList.length

  const onClickRetryButton = () => {
    onRetry()
  }

  return videosCount > 0 ? (
    <HomeVideosContainer>
      {videosList.map(eachVideo => (
        <VideoCard key={eachVideo.id} video={eachVideo} />
      ))}
    </HomeVideosContainer>
  ) : (
    <NoSearchResultsContainer>
      <NoSearchImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultsHeading>No Search results found</NoSearchResultsHeading>
      <NoSearchResultsText>
        Try different key words or remove search filter
      </NoSearchResultsText>
      <RetryButton type="button" onClick={onClickRetryButton}>
        Retry
      </RetryButton>
    </NoSearchResultsContainer>
  )
}
export default HomeVideos
