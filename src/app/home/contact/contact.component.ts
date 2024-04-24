import { Component } from '@angular/core';
import { ButtonComponent } from '../../reusable/button/button.component';
import { InfoComponent } from './info/info.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent,InfoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
