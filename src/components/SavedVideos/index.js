import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'

import VideoCard from '../VideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SavedVideosPage,
  SavedVideosPageContainer,
  SavedVideosContainer,
  SavedVideosTop,
  SavedVideosImageContainer,
  SavedVideosCardsContainer,
  SavedVideosHeading,
  NoSavedVideos,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const renderSavedVideosTopView = () => (
        <SavedVideosTop>
          <SavedVideosImageContainer>
            <HiFire size="24px" color="#ff0b37" />
          </SavedVideosImageContainer>
          <SavedVideosHeading>Saved Videos</SavedVideosHeading>
        </SavedVideosTop>
      )

      const renderSavedVideos = () => (
        <SavedVideosCardsContainer>
          {savedVideos.map(eachVideo => (
            <VideoCard key={eachVideo.id} video={eachVideo} />
          ))}
        </SavedVideosCardsContainer>
      )

      const renderNoSavedVideos = () => (
        <NoSavedVideos>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosHeading>No saved videos found</NoSavedVideosHeading>
          <NoSavedVideosText>
            You can save your videos while you watching them
          </NoSavedVideosText>
        </NoSavedVideos>
      )

      return (
        <SavedVideosPage>
          <Header />
          <SavedVideosPageContainer>
            <NavigationBar />
            <SavedVideosContainer>
              {renderSavedVideosTopView()}
              {savedVideos.length > 0
                ? renderSavedVideos()
                : renderNoSavedVideos()}
            </SavedVideosContainer>
          </SavedVideosPageContainer>
        </SavedVideosPage>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
