import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import HomeSidebar from '../../component/layout/HomeSidebar';

const meta: Meta<typeof HomeSidebar> = {
  title: 'Layout/HomeSidebar',
  component: HomeSidebar,
};

export default meta;
type Story = StoryObj<typeof HomeSidebar>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};