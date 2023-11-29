import NavigationList from '../NavigationList'

import {
  NavigationBarContainer,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaIconsContainer,
  ListItem,
  SocialMediaImage,
  ContactUsText,
} from './styledComponents'

const SocialMediaImagesList = {
  facebook:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
  twitter:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png',
  linkedin:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
}

const NavigationBar = () => (
  <NavigationBarContainer>
    <NavigationList />
    <ContactUsContainer>
      <ContactUsHeading>Contact Us</ContactUsHeading>
      <SocialMediaIconsContainer>
        <ListItem>
          <SocialMediaImage
            src={SocialMediaImagesList.facebook}
            alt="facebook logo"
          />
        </ListItem>
        <ListItem>
          <SocialMediaImage
            src={SocialMediaImagesList.twitter}
            alt="teitter logo"
          />
        </ListItem>
        <ListItem>
          <SocialMediaImage
            src={SocialMediaImagesList.linkedin}
            alt="linked in logo"
          />
        </ListItem>
      </SocialMediaIconsContainer>
      <ContactUsText>
        Enjoy! Now to see your channels and recommendations!
      </ContactUsText>
    </ContactUsContainer>
  </NavigationBarContainer>
)
export default NavigationBar
