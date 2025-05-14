import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.less',
})
export class ButtonComponent {
  title = input<string>('Button');
  type = input<'primary' | 'secondary'>('primary');
  width = input<string>('130');
  widthUnits = input<'px' | '%' | 'rem' | 'em'>('px');
  height = input<string>('32');
  heightUnits = input<'px' | '%' | 'rem' | 'em'>('px');

  @Output() onClick = new EventEmitter<Event>();

  computedWidth = computed(() => this.width() + this.widthUnits());
  computedHeight = computed(() => this.height() + this.heightUnits());

  buttonClicked(event: Event) {
    event.stopPropagation();
    this.onClick.emit(event);
  }
}
