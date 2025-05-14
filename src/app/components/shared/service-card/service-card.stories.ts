import type { Meta, StoryObj } from '@storybook/angular';
import { ServiceCardComponent } from './service-card.component';
import { signal } from '@angular/core';

const meta: Meta = {
  title: 'Components/Service Card',
  component: ServiceCardComponent,
  tags: ['autodocs'],
  argTypes: {
    logUrl: {
      control: 'text',
      description: 'The URL to the log service.',
      defaultValue: 'https://example.com/logs',
    },
    title: {
      control: 'text',
      description: 'The title of the service card.',
      defaultValue: 'Data Analytics & Visualization',
    },
    description: {
      control: 'text',
      description: 'The description of the service card.',
      defaultValue:
        'Transforming data into actionable insights. Transforming data into actionable insights.Transforming data into actionable insights. Transforming data into actionable insights. Transforming data into actionable insights. Transforming data into actionable insights.',
    },
  },
};

export default meta;
type Story = StoryObj<ServiceCardComponent>;

export const defaultType: Story = {
  args: {
    logoUrl: 'https://picsum.photos/200',
    title: 'Data Analytics & Visualization',
    description:
      'Transforming data into actionable insights. Transforming data into actionable insights.Transforming data into actionable insights. Transforming data into actionable insights. Transforming data into actionable insights. Transforming data into actionable insights.',
  },
};
