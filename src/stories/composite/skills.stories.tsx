import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Skills from '../../component/composite/Skills';

const meta: Meta<typeof Skills> = {
  title: 'Composite/Skills',
  component: Skills,
};

export default meta;
type Story = StoryObj<typeof Skills>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};