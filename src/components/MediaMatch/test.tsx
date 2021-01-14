import { render, screen } from '@testing-library/react'
import { Desktop, Mobile, DefaultNoProps } from './stories'

describe('<MediaMatch />', () => {

  it('should not show children components when no lessThan or greaterThan is passed as props', () => {
    render(<DefaultNoProps />)
    screen.debug()
    expect(screen.getByText('No props passed')).toHaveStyleRule('display', 'none')
    // // Even though media was passed, since it doesnt receive any props then it should yet be display:none
    // expect(screen.getByText('No props passed')).toHaveStyleRule('display', 'none', {
    //   media: '(min-width: 768px)'
    // })
  })

  it('should not show components if no media was passed', () => {
    render(
      <>
        <Desktop />
        <Mobile />
      </>
    )

    expect(screen.getByText('Only on Desktop')).toHaveStyleRule('display', 'none')
    expect(screen.getByText('Only on Mobile')).toHaveStyleRule('display', 'none')
  })

  it('should render or hide component based on the media passed', () => {
    render(
      <>
        <Desktop />
        <Mobile />
      </>
    )

    expect(screen.getByText('Only on Desktop')).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
    expect(screen.getByText('Only on Mobile')).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
