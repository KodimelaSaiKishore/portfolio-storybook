import { Component, inject, signal } from '@angular/core';
import { LinksComponent } from '../../shared/links/links.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LinksComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.less',
})
export class NavBarComponent {
  router = inject(Router);

  fontSize: string = '20px';
  navItems = signal<{ title: string; hyperLink: string; isActive: boolean }[]>([
    { title: 'Home', hyperLink: '/home', isActive: true },
    { title: 'About', hyperLink: '/about', isActive: false },
    { title: 'Contact', hyperLink: '/contact', isActive: false },
  ]);

  routeChanged(index: number) {
    this.navItems().forEach((item, i) => {
      item.isActive = i === index;
    });
    this.router.navigate([this.navItems()[index].hyperLink]);

    this.navigateToCurrentPage(this.navItems()?.[index]?.hyperLink ?? '');
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const path = event.urlAfterRedirects;
        this.navigateToCurrentPage(path);
      });
  }

  navigateToCurrentPage(page: any) {
    const element = document.getElementById(page);

    if (element) {
      setTimeout(() => {
        const yOffset = -60;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      }, 0);
    }
  }
}
