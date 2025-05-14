import { Routes } from '@angular/router';
import { HeroSectionComponent } from './components/pages/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/pages/about-section/about-section.component';
import { ContactSectionComponent } from './components/pages/contact-section/contact-section.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HeroSectionComponent,
  },
  { path: 'about', component: AboutSectionComponent },
  {
    path: 'contact',
    component: ContactSectionComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
