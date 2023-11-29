import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import PlayVideoView from '../PlayVideoView'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import {VideoItemDetailsContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = videoDetails => ({
    name: videoDetails.channel.name,
    profileImageUrl: videoDetails.channel.profile_image_url,
    subscriberCount: videoDetails.channel.subscriber_count,
    description: videoDetails.description,
    id: videoDetails.id,
    publishedAt: videoDetails.published_at,
    thumbnailUrl: videoDetails.thumbnail_url,
    title: videoDetails.title,
    videoUrl: videoDetails.video_url,
    viewCount: videoDetails.view_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const videoDetails = fetchedData.video_details
      const updatedFetchedData = this.formattedData(videoDetails)
      this.setState({
        videoDetails: updatedFetchedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState({
      isLiked: true,
      isDisliked: false,
    })
  }

  onClickDislike = () => {
    this.setState({
      isLiked: false,
      isDisliked: true,
    })
  }

  renderVideoDetailsFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoaderView = () => <LoaderView />

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <>
        <PlayVideoView
          videoDetails={videoDetails}
          like={isLiked}
          dislike={isDisliked}
          onClickLike={this.onClickLike}
          onClickDislike={this.onClickDislike}
        />
      </>
    )
  }

  renderVideoDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideoView()
      case apiStatusConstants.failure:
        return this.renderVideoDetailsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoItemDetailsContainer>
          <NavigationBar />
          {this.renderVideoDetailsView()}
        </VideoItemDetailsContainer>
      </>
    )
  }
}
export default VideoItemDetails
