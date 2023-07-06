import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Letter from '../../component/ui/Letter';

const meta: Meta<typeof Letter> = {
  title: 'UI/Letter',
  component: Letter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Letter>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};