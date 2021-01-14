import Logo, { LogoProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'React Avancado/Logo',
  component: Logo,
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

export const WithColor = Default.bind({})
WithColor.args = {
  color: 'black'
}
