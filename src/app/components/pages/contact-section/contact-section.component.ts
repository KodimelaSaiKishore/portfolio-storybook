import { Component, HostBinding, input } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { TextAreaComponent } from '../../shared/text-area/text-area.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    ButtonComponent,
    InputFieldComponent,
    TextAreaComponent,
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.less',
})
export class ContactSectionComponent {
  title = input<string>('Get In Touch');
  description = input<string>('Lets Work together');

  buttonData: {
    title: string;
    type: any;
    width: string;
    widthUnits: any;
    height: string;
    heightUnits: any;
  } = {
    title: 'Get In Touch',
    type: 'primary',
    width: '200',
    widthUnits: 'px',
    height: '50',
    heightUnits: 'px',
  };

  nameData: {
    title: string;
    placeholder: string;
    width: string;
    widthUnits: any;
    height: string;
    heightUnits: any;
    type: any;
  } = {
    title: 'Name',
    placeholder: 'Enter your name',
    width: '100',
    widthUnits: '%',
    height: '40',
    heightUnits: 'px',
    type: 'text',
  };

  emailData: {
    title: string;
    placeholder: string;
    width: string;
    widthUnits: any;
    height: string;
    heightUnits: any;
    type: any;
  } = {
    title: 'Email',
    placeholder: 'Enter your email',
    width: '100',
    widthUnits: '%',
    height: '40',
    heightUnits: 'px',
    type: 'email',
  };

  messageData: {
    title: string;
    placeholder: string;
    width: string;
    widthUnits: any;
    height: string;
    heightUnits: any;
  } = {
    title: 'Message',
    placeholder: 'Enter your message...',
    width: '100',
    widthUnits: '%',
    height: '150',
    heightUnits: 'px',
  };

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.width') width = '100%';
}
