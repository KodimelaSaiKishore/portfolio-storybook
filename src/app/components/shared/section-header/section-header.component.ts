import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.less',
})
export class SectionHeaderComponent {
  title = input<string>('Section Header');
  description = input<string>('This is a section header component.');
}
