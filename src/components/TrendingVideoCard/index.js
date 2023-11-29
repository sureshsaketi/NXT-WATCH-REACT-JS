import {formatDistanceToNow} from 'date-fns'

import {
  VideosListItem,
  ThumbnailImage,
  VideoCardDetailsContainer,
  ProfileImageContainer,
  ProfileImage,
  DetailsContainer,
  TitleText,
  ChannelNameText,
  ChannelNameTextLarge,
  ViewsCountAndPublishedContainer,
  ViewsCountText,
  PublishedAtText,
  LinkItem,
} from './styledComponents'

const VideoCard = props => {
  const {video} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = video
  const publishedTime = formatDistanceToNow(new Date(publishedAt))
    .split(' ')
    .slice(1)
    .join(' ')

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideosListItem>
        <ThumbnailImage src={thumbnailUrl} alt={title} />
        <VideoCardDetailsContainer>
          <ProfileImageContainer>
            <ProfileImage src={profileImageUrl} alt={name} />
          </ProfileImageContainer>

          <DetailsContainer>
            <TitleText>{title}</TitleText>
            <ChannelNameTextLarge>{name}</ChannelNameTextLarge>
            <ViewsCountAndPublishedContainer>
              <ChannelNameText>{name}</ChannelNameText>
              <ViewsCountText>{viewCount} views</ViewsCountText>
              <PublishedAtText>{publishedTime} ago</PublishedAtText>
            </ViewsCountAndPublishedContainer>
          </DetailsContainer>
        </VideoCardDetailsContainer>
      </VideosListItem>
    </LinkItem>
  )
}
export default VideoCard
