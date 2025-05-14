import type { Meta, StoryObj } from '@storybook/angular';
import { TextAreaComponent } from './text-area.component';

const meta: Meta<TextAreaComponent> = {
  title: 'Components/TextArea',
  component: TextAreaComponent,
  tags: ['autodocs'],
  args: {
    title: 'Title',
    placeholder: 'Enter the text...',
    width: '130',
    widthUnits: 'px',
    height: '32',
    heightUnits: 'px',
  },
};

export default meta;
type Story = StoryObj<TextAreaComponent>;

export const defaultType: Story = {
  args: {
    title: 'Default Text Area',
    placeholder: 'Enter the text...',
    width: '130',
    widthUnits: 'px',
    height: '32',
    heightUnits: 'px',
  },
};

export const message: Story = {
  args: {
    title: 'Message Text Area',
    placeholder: 'Enter the message...',
    width: '200',
    widthUnits: 'px',
    height: '32',
    heightUnits: 'px',
  },
};

export const fullWidth: Story = {
  args: {
    title: 'Full Width Text Area',
    placeholder: 'Enter the text...',
    width: '100',
    widthUnits: '%',
    height: '200',
    heightUnits: 'px',
  },
};
