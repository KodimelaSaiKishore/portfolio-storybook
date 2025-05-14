import type { Meta, StoryObj } from '@storybook/angular';
import { LinksComponent } from './links.component';

const meta: Meta<LinksComponent> = {
  title: 'Components/Links',
  component: LinksComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the link',
      defaultValue: 'Default Link',
    },
    hyperLink: {
      control: 'text',
      description: 'Hyderlink of the link',
      defaultValue: '/',
    },
    isActive: {
      control: 'boolean',
      description: 'Is the link active',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<LinksComponent>;

export const defaultType: Story = {
  args: {
    title: 'Default Link',
    hyperLink: '/',
  },
};

export const activeType: Story = {
  args: {
    title: 'Active Link',
    hyperLink: '/',
    isActive: true,
  },
};
