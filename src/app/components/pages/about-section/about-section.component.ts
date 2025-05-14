import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ParagraphComponent } from '../../shared/paragraph/paragraph.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeaderComponent, ParagraphComponent, ButtonComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.less',
})
export class AboutSectionComponent {
  sectionTitle = 'About Me';
  sectionDescription = 'Get to know me better!';
  paragraphText = [
    `I am a passionate software developer with a love for creating innovative solutions. I enjoy working with the latest technologies and continuously learning to improve my skills. In my free time, I like to explore new programming languages and frameworks, as well as contribute to open-source projects.`,
    `I am a passionate software developer with a love for creating innovative solutions. I enjoy working with the latest technologies and continuously learning to improve my skills. In my free time, I like to explore new programming languages and frameworks, as well as contribute to open-source projects.`,
    `I am a passionate software developer with a love for creating innovative solutions. I enjoy working with the latest technologies and continuously learning to improve my skills. In my free time, I like to explore new programming languages and frameworks, as well as contribute to open-source projects.`,
  ];

  buttonData: {
    title: string;
    type: any;
    width: string;
    widthUnits: any;
    height: string;
    heightUnits: any;
  } = {
    title: 'Download Resume',
    type: 'primary',
    width: '200',
    widthUnits: 'px',
    height: '50',
    heightUnits: 'px',
  };
}
