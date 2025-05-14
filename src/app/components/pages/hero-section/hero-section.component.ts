import { Component, signal } from '@angular/core';
import { ParagraphComponent } from '../../shared/paragraph/paragraph.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ParagraphComponent, ButtonComponent, SectionHeaderComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.less',
})
export class HeroSectionComponent {
  heroTitle = signal<string>('Sai Kishore');
  heroRole = signal<string>('Frontend Engineer');
  heroImage = signal<string>('https://picsum.photos/600');
  heroBio =
    signal<string>(`As a passionate frontend developer with 4+ years of experience, I thrive on
    crafting responsive, user-friendly web experiences that blend performance
    with aesthetics. With expertise in Angular,React, HTML, CSS, and LESS, and a
    solid grasp of React fundamentals, I enjoy transforming complex requirements
    into seamless digital interfaces. I’m driven by the challenge of delivering
    high-impact features in dynamic startup environments and take pride in
    building products that truly resonate with users.`);

  buttonData: {
    title: string;
    type: any;
    width: string;
    widthUnits: any;
    height: string;
    heightUnits: any;
  } = {
    title: 'Contact Me',
    type: 'primary',
    width: '200',
    widthUnits: 'px',
    height: '50',
    heightUnits: 'px',
  };
}
