import Button, { ButtonProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'React Avancado/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'Buy now'
}
