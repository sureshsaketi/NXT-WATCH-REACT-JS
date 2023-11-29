import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {BsMoon} from 'react-icons/bs'
import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'

import {FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'

import NavigationList from '../NavigationList'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  Navbar,
  LogoContainer,
  LogoImage,
  NavItemsMobileContainer,
  NavItemsLargeContainer,
  NavItem,
  HamburgerMenuButton,
  CloseButton,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  LogoutButtonsContainer,
  LogoutText,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  LinkItem,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {changeTab, isDarkTheme, toggleTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#ffffff'
      const color = isDarkTheme ? '#ffffff' : '#181818'

      const changeTabToHome = () => {
        changeTab('Home')
      }

      const onConfirmLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        toggleTheme()
      }

      const renderLogoutPopup = () => close => (
        <LogoutButtonsContainer bgColor={isDarkTheme ? '#181818' : '#f8fafc'}>
          <LogoutText color={isDarkTheme ? '#ffffff' : '#00306e'}>
            Are you sure you want to logout?
          </LogoutText>
          <ButtonsContainer>
            <CancelButton
              type="button"
              onClick={() => close()}
              data-testid="confirm"
            >
              Cancel
            </CancelButton>
            <ConfirmButton onClick={onConfirmLogout}>Confirm</ConfirmButton>
          </ButtonsContainer>
        </LogoutButtonsContainer>
      )

      const renderNavItemsMobileView = () => (
        <NavItemsMobileContainer>
          <NavItem onClick={onChangeTheme}>
            {isDarkTheme ? (
              <IoSunnyOutline color={isDarkTheme ? '#ffffff' : null} />
            ) : (
              <BsMoon color={isDarkTheme ? '#ffffff' : null} />
            )}
          </NavItem>
          <NavItem>
            <Popup
              modal
              trigger={
                <HamburgerMenuButton
                  type="button"
                  data-testid="hamburgerIconButton"
                  color={color}
                >
                  <GiHamburgerMenu size="25" />
                </HamburgerMenuButton>
              }
            >
              {close => (
                <>
                  <PopupContainer bgColor={bgColor}>
                    <CloseButton
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                      data-testid="closeButton"
                      color={color}
                    >
                      <IoMdClose size="25" />
                    </CloseButton>
                    <NavigationList />
                  </PopupContainer>
                </>
              )}
            </Popup>
          </NavItem>
          <NavItem>
            <Popup
              modal
              trigger={
                <HamburgerMenuButton
                  type="button"
                  data-testid="hamburgerIconButton"
                  color={color}
                >
                  <FiLogOut size="24" />
                </HamburgerMenuButton>
              }
            >
              {renderLogoutPopup()}
            </Popup>
          </NavItem>
        </NavItemsMobileContainer>
      )

      const renderNavItemsLargeView = () => (
        <NavItemsLargeContainer>
          <NavItem onClick={onChangeTheme}>
            {isDarkTheme ? (
              <IoSunnyOutline color={isDarkTheme ? '#ffffff' : null} />
            ) : (
              <BsMoon color={isDarkTheme ? '#ffffff' : null} />
            )}
          </NavItem>
          <NavItem>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
          </NavItem>
          <NavItem>
            <Popup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                >
                  Logout
                </LogoutButton>
              }
            >
              {renderLogoutPopup()}
            </Popup>
          </NavItem>
        </NavItemsLargeContainer>
      )

      return (
        <Navbar bgColor>
          <LogoContainer>
            <LinkItem to="/">
              <LogoImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
                onClick={changeTabToHome}
              />
            </LinkItem>
          </LogoContainer>
          {renderNavItemsMobileView()}
          {renderNavItemsLargeView()}
        </Navbar>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
