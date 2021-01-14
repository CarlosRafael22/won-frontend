import Heading, { HeadingProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'React Avancado/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />
Default.args = {
  children: 'Most Populars'
}
