import { Component, inject } from '@angular/core';
import { NavBarComponent } from './components/pages/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './components/pages/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/pages/about-section/about-section.component';
import { ContactSectionComponent } from './components/pages/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'portfolio-storybook';
}
