import { render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render a heading in the component', () => {
    const { container } = render(<Menu />)
    expect(
      screen.getByRole('heading', { name: /Menu/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
