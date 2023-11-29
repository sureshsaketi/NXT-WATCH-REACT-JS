import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  height: 86.5vh;
  background-color: #f4f4f4;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888; /* Color of the thumb */
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`

export const ReactPlayerContainer = styled.div`
  width: 100%;
  background-size: cover;
  position: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 200px;
  }
  @media screen and (min-width: 1050px) {
    height: 500px;
    width: 80%;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`
export const PlayVideoTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #212121;
  margin-top: 10px;
`

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ViewsText = styled.p`
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
`
export const ViewsAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  color: ${props => (props.color ? '#2563eb' : '#7e858e')};

  font-size: 16px;
  font-weight: 600;
  gap: 5px;
  cursor: pointer;
`
export const HorizontalLine = styled.hr`
  height: 1px solid #cccccc;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ChannelImage = styled.img`
  height: 48px;
  width: 48px;
`
export const ChannelNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const ChannelName = styled.p`
  color: #212121;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const DescriptionText = styled(ChannelName)`
  color: #64748b;
  margin-bottom: 20px;
  font-size: 15px;
`
