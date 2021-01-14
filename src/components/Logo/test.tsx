import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render white by default', () => {
    const { container } = renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Won Games/i).parentElement
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render black when color is passed', () => {
    const { container } = renderWithTheme(<Logo color="black" />)
    expect(
      screen.getByLabelText(/Won Games/i).parentElement
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal size as default', () => {
    const { container } = renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Won Games/i).parentElement
    ).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo when large is passed to size prop', () => {
    const { container } = renderWithTheme(<Logo size="large" />)
    expect(
      screen.getByLabelText(/Won Games/i).parentElement
    ).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo and not render text when hideOnMobile is true', () => {
    const { container } = renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Won Games/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
