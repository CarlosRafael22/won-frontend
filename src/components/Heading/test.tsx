import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a heading in the component', () => {
    const { container } = render(<Heading />)
    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
