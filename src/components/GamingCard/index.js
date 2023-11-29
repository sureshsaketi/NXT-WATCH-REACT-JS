import {GamingCardImage, GameTitle, GameViewCount} from './styledComponents'

const GamingCard = props => {
  const {video} = props
  const {thumbnailUrl, title, viewCount} = video
  return (
    <>
      <GamingCardImage src={thumbnailUrl} alt={title} />
      <GameTitle>{title}</GameTitle>
      <GameViewCount>{viewCount} Watching Worldwide</GameViewCount>
    </>
  )
}
export default GamingCard
