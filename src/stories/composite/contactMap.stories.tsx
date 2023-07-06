import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import ContactMap from '../../component/composite/Contact/ContactMap';

const meta: Meta<typeof ContactMap> = {
  title: 'Composite/Contact/ContactMap',
  component: ContactMap,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContactMap>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};