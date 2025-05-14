import { Component, input } from '@angular/core';
import { ParagraphComponent } from '../paragraph/paragraph.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [ParagraphComponent],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.less',
})
export class ServiceCardComponent {
  logoUrl = input<string>('');
  title = input<string>('Data Analytics & Visualization');
  description = input<string>(
    'Transforming data into actionable insights. Transforming data into actionable insights.Transforming data into actionable insights. Transforming data into actionable insights. Transforming data into actionable insights. Transforming data into actionable insights.'
  );
}
