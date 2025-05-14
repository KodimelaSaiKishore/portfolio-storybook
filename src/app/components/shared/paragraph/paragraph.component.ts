import { Component, input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.less',
})
export class ParagraphComponent {
  paragraphText = input<string>('Test Paragraph Text');
  alignment = input<'start' | 'end' | 'center'>('center');
}
