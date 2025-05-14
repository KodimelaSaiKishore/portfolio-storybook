import type { Meta, StoryObj } from '@storybook/angular';
import { SectionHeaderComponent } from './section-header.component';

const meta: Meta<SectionHeaderComponent> = {
  title: 'Components/Section Header',
  component: SectionHeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the section header.',
      defaultValue: 'Section Title',
    },
    description: {
      control: 'text',
      description: 'The description of the section header.',
      defaultValue: 'This is a sample description.',
    },
  },
};

export default meta;
type Story = StoryObj<SectionHeaderComponent>;

export const defaultType: Story = {
  args: {
    title: 'Custom Service',
    description: 'This is a sample service description.',
  },
};
