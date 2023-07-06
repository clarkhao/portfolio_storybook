import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import ContactForm from '../../component/composite/Contact/ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Composite/Contact/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};