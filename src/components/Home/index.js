import {Component} from 'react'
import Cookies from 'js-cookie'

import {IoMdClose} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import {
  HomePageContainer,
  HomeContainer,
  BannerAndSearchBarContainer,
  BannerContainer,
  BannerLeftContainer,
  LogoImage,
  BannerText,
  GetItNowButton,
  BannerRightContainer,
  BannerCrossButton,
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    display: true,
    searchInput: '',
    apiStatus: apiStatusConstants.inProgress,
  }

  componentDidMount() {
    this.getVideosList()
  }

  onCloseBanner = () => {
    this.setState({display: false})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updateFetchedData = fetchedData.videos.map(eachVideo => ({
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updateFetchedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  //   showAlert = () => {
  //     window.alert('Get Premium Subscription!')
  //   }

  renderBannerSection = () => {
    const {display} = this.state
    const isDisplaying = display ? 'flex' : 'none'

    return (
      <BannerContainer display={isDisplaying}>
        <BannerLeftContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <GetItNowButton type="button" onClick={this.showAlert}>
            Get it now
          </GetItNowButton>
        </BannerLeftContainer>
        <BannerRightContainer>
          <BannerCrossButton type="button" onClick={this.onCloseBanner}>
            <IoMdClose size="20" />
          </BannerCrossButton>
        </BannerRightContainer>
      </BannerContainer>
    )
  }

  renderSearchBarField = () => {
    const {searchInput} = this.state

    return (
      <SearchBarContainer>
        <SearchInput
          type="search"
          value={searchInput}
          onChange={this.onChangeInput}
          placeholder="Search"
        />
        <SearchButton type="button" onClick={this.getVideosList}>
          <BiSearchAlt2 />
        </SearchButton>
      </SearchBarContainer>
    )
  }

  renderVideosListView = () => {
    const {videosList} = this.state
    return <HomeVideos videosList={videosList} onRetry={this.onRetry} />
  }

  renderLoaderView = () => <LoaderView />

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideosList)
  }

  renderVideosFailure = () => <FailureView onRetry={this.onRetry} />

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderVideosFailure()

      default:
        return null
    }
  }

  render() {
    return (
      <HomePageContainer>
        <Header />
        <HomeContainer data-testid="home">
          <NavigationBar />
          <BannerAndSearchBarContainer>
            {this.renderBannerSection()}
            {this.renderSearchBarField()}
            {this.renderAllVideos()}
          </BannerAndSearchBarContainer>
        </HomeContainer>
      </HomePageContainer>
    )
  }
}
export default Home
