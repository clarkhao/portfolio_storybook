import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import PicCard from '../../component/composite/Portfolio/PicCard';

const meta: Meta<typeof PicCard> = {
  title: 'Composite/Portfolio/PicCard',
  component: PicCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PicCard>;

export const Primary: Story = {
  args: {
    width: 400
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};