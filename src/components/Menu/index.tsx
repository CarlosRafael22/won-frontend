import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import * as Style from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
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
        <Style.NavMenu>
          <Style.NavMenuLink href="#">Home</Style.NavMenuLink>
          <Style.NavMenuLink href="#">Explore</Style.NavMenuLink>

          {!!username && <>
          <Style.NavMenuLink href="#">My account</Style.NavMenuLink>
          <Style.NavMenuLink href="#">Wishlist</Style.NavMenuLink>
          </>}
        </Style.NavMenu>
        {!username && <Style.RegisterBox>
          <Button fullWidth size="large">Log in now</Button>
          <span>or</span>
          <Style.CreateAccountLink href="#" title="Sign Up">Sign Up</Style.CreateAccountLink>
        </Style.RegisterBox>}
    </Style.FullMenu>
  </Style.Wrapper>
)}

export default Menu
