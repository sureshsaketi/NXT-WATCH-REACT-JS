import styled from 'styled-components'

export const GamingCardImage = styled.img`
  height: 150px;
  width: 100%;
  flex-grow: 1;
  @media screen and (min-width: 575px) {
    height: 270px;
  }
`
export const GameTitle = styled.p`
  color: #181818;
  font-family: 'roboto';
  line-height: 0.8;
  font-size: 14px;
  font-weight: 500;
`
export const GameViewCount = styled(GameTitle)`
  color: #64748b;
`
