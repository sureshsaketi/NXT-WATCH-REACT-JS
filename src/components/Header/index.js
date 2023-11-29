import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
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
      const {changeTab} = value

      const changeTabToHome = () => {
        changeTab('Home')
      }

      const onConfirmLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const renderLogoutPopup = () => close => (
        <LogoutButtonsContainer>
          <LogoutText>Are you sure you want to logout?</LogoutText>
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
          <NavItem>
            <FaMoon />
          </NavItem>
          <NavItem>
            <Popup
              modal
              trigger={
                <HamburgerMenuButton
                  type="button"
                  data-testid="hamburgerIconButton"
                >
                  <GiHamburgerMenu size="25" />
                </HamburgerMenuButton>
              }
            >
              {close => (
                <>
                  <PopupContainer>
                    <CloseButton
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                      data-testid="closeButton"
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
          <NavItem>
            <FaMoon />
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
              trigger={<LogoutButton type="button">Logout</LogoutButton>}
            >
              {renderLogoutPopup()}
            </Popup>
          </NavItem>
        </NavItemsLargeContainer>
      )

      return (
        <Navbar>
          <LogoContainer>
            <LinkItem to="/">
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
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
