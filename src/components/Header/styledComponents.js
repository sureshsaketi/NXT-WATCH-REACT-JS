import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  height: 68px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0px;
  }
`
export const LogoContainer = styled.div``

export const LogoImage = styled.img`
  height: 28px;
`

export const NavItemsMobileContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  list-style: none;
  font-size: 25px;
  cursor: pointer;
`
export const NavItemsLargeContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 28px;
`
export const LogoutButton = styled.button`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border-radius: 2px;
  background-color: transparent;
  height: 28px;
  width: 80px;
  align-self: center;
  margin-bottom: 10px;
  cursor: pointer;
`
export const HamburgerMenuButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
  margin-right: 40px;
  margin-top: 40px;
`
export const LogoutButtonsContainer = styled.div`
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 16px 0px #bfbfbf;
  gap: 35px;
`
export const LogoutText = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const CancelButton = styled.button`
  height: 36px;
  width: 80px;
  font-weight: 500;
  border-radius: 2px;
  background-color: transparent;
  color: #94a3b8;
  border: 1px solid #94a3b8;
  outline: none;
  font-size: 16px;
  cursor: pointer;
`
export const ConfirmButton = styled(CancelButton)`
  color: #ffffff;
  background-color: #3b82f6;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
