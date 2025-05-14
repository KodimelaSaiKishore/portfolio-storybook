import { Meta, StoryObj } from '@storybook/angular';
import { ProjectsCardComponent } from './projects-card.component';

const meta: Meta = {
  title: 'Components+/Projects Card',
  component: ProjectsCardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ProjectsCardComponent>;

export const Default: Story = {};
