import * as Style from './styles'

export type HeadingProps = {
  children: React.ReactNode,
  color?: 'white' | 'black',
  lineLeft?: boolean,
  lineBottom?: boolean
}

const Heading = ({ children, color = 'white', lineLeft = false, lineBottom = false }: HeadingProps) => (
  <Style.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>{children}</Style.Wrapper>
)

export default Heading
