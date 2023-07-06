import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Portfolio from '../../component/composite/Portfolio';

const meta: Meta<typeof Portfolio> = {
  title: 'Composite/Portfolio',
  component: Portfolio,
};

export default meta;
type Story = StoryObj<typeof Portfolio>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};