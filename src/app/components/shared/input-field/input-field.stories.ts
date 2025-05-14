import type { Meta, StoryObj } from '@storybook/angular';
import { InputFieldComponent } from './input-field.component';

const meta: Meta<InputFieldComponent> = {
  title: 'Components/InputField',
  component: InputFieldComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InputFieldComponent>;

export const defaultType: Story = {
  args: {
    title: 'Title',
    placeholder: 'Enter the text...',
    width: '130',
    widthUnits: 'px',
    height: '32',
    heightUnits: 'px',
  },
};

export const nameField: Story = {
  args: {
    title: 'Name',
    placeholder: 'Enter name',
    width: '200',
    widthUnits: 'px',
    height: '32',
    heightUnits: 'px',
  },
};

export const fullWidth: Story = {
  args: {
    title: 'Full Width',
    placeholder: 'Enter the text...',
    width: '100',
    widthUnits: '%',
    height: '32',
    heightUnits: 'px',
  },
};
