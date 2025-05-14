import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.less',
})
export class InputFieldComponent {
  title = input<string>('Input Field');
  placeholder = input<string>('Enter text here...');
  type = input<'text' | 'email' | 'password' | 'number'>('text');

  width = input<string>('130');
  widthUnits = input<'px' | '%' | 'rem' | 'em'>('px');
  height = input<string>('32');
  heightUnits = input<'px' | '%' | 'rem' | 'em'>('px');

  computedWidth = computed(() => this.width() + this.widthUnits());
  computedHeight = computed(() => this.height() + this.heightUnits());
}
