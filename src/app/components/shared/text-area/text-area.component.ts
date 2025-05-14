import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.less',
})
export class TextAreaComponent {
  title = input<string>('Title');
  placeholder = input<string>('Enter the text...');

  width = input<string>('130');
  widthUnits = input<'px' | '%' | 'rem' | 'em'>('px');
  height = input<string>('32');
  heightUnits = input<'px' | '%' | 'rem' | 'em'>('px');

  computedWidth = computed(() => this.width() + this.widthUnits());
  computedHeight = computed(() => this.height() + this.heightUnits());
}
