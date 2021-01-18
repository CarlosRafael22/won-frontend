import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size as default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      fontSize: '1.4rem'
    })
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
    expect(screen.getByRole('button')).toHaveStyle({
      padding: '0.8rem 4.8rem',
      height: '5rem',
      fontSize: '1.6rem'
    })
  })
})
