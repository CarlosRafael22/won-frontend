import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size as default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      fontSize: '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small button when size prop was passed', () => {
    renderWithTheme(<Button size='small'>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: '0.8rem',
      height: '3rem',
      fontSize: '1.2rem'
    })
  })

  it('should render the large button when size prop was passed', () => {
    renderWithTheme(<Button size='large'>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: '0.8rem 4.8rem',
      height: '5rem',
      fontSize: '1.6rem'
    })
  })

  it('should render the fullWidth when prop was passed', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the icon when prop was passed', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid='icon' />}>Buy now</Button>)
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
