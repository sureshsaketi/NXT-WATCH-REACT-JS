import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const VideoDetailsContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
export const VideosLoaderContainer = styled.div`
  height: 86.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`
