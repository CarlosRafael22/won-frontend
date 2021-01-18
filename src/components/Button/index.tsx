import * as Style from './styles'

export type ButtonProps = {
  children?: React.ReactNode,
  size?: 'small' | 'medium' | 'large',
  fullWidth?: boolean
}

const Button = ({ children, size = 'medium', fullWidth = false }: ButtonProps) => (
  <Style.Wrapper size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </Style.Wrapper>
)

export default Button
