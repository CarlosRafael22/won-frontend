import * as Style from './styles'

export type ButtonProps = {
  children?: React.ReactNode,
  size?: 'small' | 'medium' | 'large',
  fullWidth?: boolean,
  icon?: JSX.Element,
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, icon, size = 'medium', fullWidth = false, ...props }: ButtonProps) => (
  <Style.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </Style.Wrapper>
)

export default Button
