import type { Meta, StoryObj } from '@storybook/angular';
import { ParagraphComponent } from './paragraph.component';
import { signal } from '@angular/core';

const meta: Meta = {
  title: 'Components/paragraph',
  component: ParagraphComponent,
  tags: ['autodocs'],
  argTypes: {
    paragraphText: {
      control: 'text',
      description: 'The text to be displayed in the paragraph.',
      defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  },
};

export default meta;
type Story = StoryObj<ParagraphComponent>;

export const Default: Story = {
  args: {
    paragraphText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};
