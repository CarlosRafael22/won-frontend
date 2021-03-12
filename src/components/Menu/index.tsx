import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import * as Style from './styles'
import Logo from 'components/Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
  <Style.Wrapper>
    <Style.IconWrapper>
      <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
    </Style.IconWrapper>
    <Style.LogoWrapper>
      <Logo hideOnMobile />
    </Style.LogoWrapper>
    <Style.MenuGroup>
      <Style.IconWrapper>
        <SearchIcon aria-label="Search" />
      </Style.IconWrapper>
      <Style.IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </Style.IconWrapper>   
    </Style.MenuGroup> 

    <Style.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
      <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
    </Style.FullMenu>
  </Style.Wrapper>
)}

export default Menu
