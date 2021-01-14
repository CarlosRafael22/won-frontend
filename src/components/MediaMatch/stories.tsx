import MediaMatch from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'React Avancado/MediaMatch',
  component: MediaMatch,
} as Meta

export const DefaultNoProps: Story = () => (<MediaMatch>No props passed</MediaMatch>)

export const Desktop: Story = () => (<MediaMatch greaterThan={'medium'}>Only on Desktop</MediaMatch>)

export const Mobile: Story = () => (<MediaMatch lessThan={'medium'}>Only on Mobile</MediaMatch>)
// Setting the default viewport for this Story
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}