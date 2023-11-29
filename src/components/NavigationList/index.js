import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  MenuItemsListContainer,
  MenuItemContainer,
  MenuItemName,
  NavLink,
} from './styledComponents'

const NavigationList = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {activeTab, changeTab, isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#ffffff'
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const activeTabBg = isDarkTheme ? '#383838' : '#cbd5e1'

      const onClickHomeTab = () => {
        changeTab('Home')
      }

      const onClickTrendingTab = () => {
        changeTab('Trending')
      }

      const onClickGamingTab = () => {
        changeTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        changeTab('SavedVideos')
      }

      return (
        <MenuItemsListContainer bgColor={bgColor}>
          <NavLink to="/">
            <MenuItemContainer
              onClick={onClickHomeTab}
              bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
            >
              <AiFillHome
                size="18"
                color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
              />
              <MenuItemName textColor={textColor}>Home</MenuItemName>
            </MenuItemContainer>
          </NavLink>

          <NavLink to="/trending">
            <MenuItemContainer
              onClick={onClickTrendingTab}
              bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
            >
              <HiFire
                size="18"
                color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
              />
              <MenuItemName textColor={textColor}>Trending</MenuItemName>
            </MenuItemContainer>
          </NavLink>

          <NavLink to="/gaming">
            <MenuItemContainer
              onClick={onClickGamingTab}
              bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
            >
              <SiYoutubegaming
                size="18"
                color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
              />
              <MenuItemName textColor={textColor}>Gaming</MenuItemName>
            </MenuItemContainer>
          </NavLink>

          <NavLink to="/saved-videos">
            <MenuItemContainer
              onClick={onClickSavedVideosTab}
              bgColor={activeTab === 'SavedVideos' ? activeTabBg : 'none'}
            >
              <BiListPlus
                size="20"
                color={activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'}
              />
              <MenuItemName textColor={textColor}>Saved videos</MenuItemName>
            </MenuItemContainer>
          </NavLink>
        </MenuItemsListContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NavigationList
