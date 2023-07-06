import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import TopRight from '../../component/layout/TopRight';

const meta: Meta<typeof TopRight> = {
  title: 'Layout/TopRight',
  component: TopRight,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TopRight>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};