import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuItemsListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 20px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #0f0f0f;
`

export const MenuItemContainer = styled.li`
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  gap: 15px;
  height: 32px;
  cursor: pointer;
  padding-left: 35%;
  @media screen and (min-width: 768px) {
    padding-left: 10%;
  }
`
export const MenuItemName = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.textColor};
`
