import Menu from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'React Avancado/Menu',
  component: Menu,
} as Meta

export const Default: Story = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
