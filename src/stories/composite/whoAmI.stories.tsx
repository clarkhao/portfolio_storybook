import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import WhoAmI from '../../component/composite/WhoAmI';

const meta: Meta<typeof WhoAmI> = {
  title: 'Composite/WhoAmI',
  component: WhoAmI,
};

export default meta;
type Story = StoryObj<typeof WhoAmI>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};