import { Component, input } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.less',
})
export class ProjectsCardComponent {
  imageUrl = input<string>('https://picsum.photos/200');
  projectTitle = input<string>('Project Title');
  technologyUsed = input<string>(
    'This is a short description of the project. It gives an overview of what the project is about and its main features.'
  );
  projectLink = input<string>('https://google.com');

  onCardClick() {
    window.open(this.projectLink(), '_blank');
  }
}
