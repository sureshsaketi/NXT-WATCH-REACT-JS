import styled from 'styled-components'

export const HomePageContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  height: 86.5vh;
  display: flex;
`
export const BannerAndSearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  box-sizing: border-box;
  @media screen and (min-width: 576px) {
    overflow-y: scroll;
    margin: 20px;
    &::-webkit-scrollbar {
      width: 10px; /* Width of the scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background: #888; /* Color of the thumb */
      border-radius: 5px; /* Roundness of the thumb */
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1; /* Color of the track */
    }
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 200px;
  background-size: cover;
  display: ${props => props.display};
  gap: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 575px) {
    padding: 20px;
  }
`
export const BannerLeftContainer = styled.div`
  padding: 10px;
  flex-grow: 1;
`
export const LogoImage = styled.img`
  height: 40px;
  margin-bottom: 10px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  width: 80%;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 10px;
`
export const GetItNowButton = styled.button`
  width: 100px;
  height: 36px;
  border: 1px solid #0f0f0f;
  text-transform: uppercase;
  outline: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 12px;
  margin-top: 20px;
  cursor: pointer;
`
export const BannerRightContainer = styled.div`
  padding: 20;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const BannerCrossButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
  align-self: flex-end;
`
export const SearchBarContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #7e858e;
  border-radius: 1px;
  width: 330px;
  height: 28px;
  flex-shrink: 0;
  @media screen and (max-width: 575px) {
    margin: 15px;
  }
  margin-bottom: 20px;
`

export const SearchInput = styled.input`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  border: none;
  padding-left: 10px;
  color: #1e293b;
  font-family: 'Roboto';
  width: 80%;
  height: 100%;
  outline: none;
  flex-grow: 1;
`
export const SearchButton = styled.button`
  background-color: ${props => props.buttonBg};
  color: ${props => props.textColor};
  border: none;
  height: 100%;
  width: 20%;
  border-left: 1px solid #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
`
