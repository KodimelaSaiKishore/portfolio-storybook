import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.less',
})
export class LinksComponent {
  router: any = inject(Router);

  title = input<string>('Link');
  hyperLink = input<string>('');
  isActive = input<boolean>(false);
  fontSize = input<string>('16px');

  @Output() linkClicked = new EventEmitter();

  onLinkClicked(event: Event) {
    this.linkClicked.emit(this.hyperLink());
    event.stopPropagation();
  }
}
