import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideosListItem = styled.li`
  list-style: none;
  width: 376px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 575px) {
    flex-direction: row;
  }
  cursor: pointer;
`
export const ThumbnailImage = styled.img`
  height: 200px;
  width: 100%;
  @media screen and (min-width: 575px) {
    height: 160px;
  }
`
export const VideoCardDetailsContainer = styled.div`
  padding: 12px;
  gap: 15px;
  display: flex;
  @media screen and (min-width: 575px) {
    flex-direction: column;
    padding-top: 0px;
  }
`
export const ProfileImageContainer = styled.div``

export const ProfileImage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  @media screen and (min-width: 575px) {
    display: none;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 575px) {
    width: 200px;
    margin-top: 0px;
  }
`

export const TitleText = styled.p`
  color: #0f0f0f;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  @media screen and (max-width: 575px) {
    font-size: 16px;
  }
`

export const ChannelNameText = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 575px) {
    display: none;
    font-size: 14px;
  }
`
export const ChannelNameTextLarge = styled(ChannelNameText)`
  @media screen and (max-width: 575px) {
    display: none;
  }
  @media screen and (min-width: 576px) {
    display: block;
  }
`
export const ViewsCountAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
export const ViewsCountText = styled(ChannelNameText)`
  display: block;
`

export const PublishedAtText = styled(ChannelNameText)`
  display: block;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
