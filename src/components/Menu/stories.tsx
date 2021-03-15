import Menu, { MenuProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'React Avancado/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const WithLoggedUser = Default.bind({})
WithLoggedUser.args = {
  username: 'cesar'
}
