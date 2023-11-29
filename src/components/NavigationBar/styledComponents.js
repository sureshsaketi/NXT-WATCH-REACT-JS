import styled from 'styled-components'

export const NavigationBarContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
  height: 86.5vh;
`
export const ContactUsContainer = styled.div`
  padding-left: 10%;
`
export const ContactUsHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
`
export const SocialMediaIconsContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`
export const ListItem = styled.li`
  list-style-type: none;
`
export const SocialMediaImage = styled.img`
  height: 30px;
  width: 30px;
`
export const ContactUsText = styled.p`
  color: #475569;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 20px;
`
