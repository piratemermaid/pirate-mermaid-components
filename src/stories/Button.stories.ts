import { Button } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    variant: {
      control: 'radio',
      options: ['contained', 'outlined', 'text'],
      defaultValue: 'contained',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    shape: {
      control: 'radio',
      options: ['rounded', 'square'],
      defaultValue: 'rounded',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
  },
};
