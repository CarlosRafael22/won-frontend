import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { WithLoggedUser } from './stories'

import Menu from '.'

describe('<Menu />', () => {
  it('should render Menu', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should render the open/close Menu', () => {
    renderWithTheme(<Menu />)
    // select the Menu
    const fullMenu = screen.getByRole('navigation', { hidden: true })
    // verify its hidden and opacity 0
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })

    // when we click its not hidden anymore and opacity 1
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenu).toHaveStyle({ opacity: 1 })

    // when we click the close icon on the menu it closes
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })
  })

  it('should show only all menu options if user is logged', () => {
    renderWithTheme(<WithLoggedUser {...WithLoggedUser.args} />)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
  })

  it('should show all menu options and register buttons if user is not logged', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
  })
})
