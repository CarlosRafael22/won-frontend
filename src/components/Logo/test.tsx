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
    const { container } = renderWithTheme(<Logo color={'black'} />)
    expect(
      screen.getByLabelText(/Won Games/i).parentElement
    ).toHaveStyle({
      color: '#030517'
    })
  })
})
