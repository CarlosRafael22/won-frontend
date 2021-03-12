import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import * as Style from './styles'
import Logo from 'components/Logo'

const Menu = () => (
  <Style.Wrapper>
    <Style.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
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
  </Style.Wrapper>
)

export default Menu
