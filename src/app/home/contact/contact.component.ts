import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../reusable/button/button.component';
import { InfoComponent } from './info/info.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, InfoComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;

  retMessage: string = 'asd';
  messageType: string = 'none';

  sendEmail() {
    const name = this.name.nativeElement.value;
    const email = this.email.nativeElement.value;
    const message = this.message.nativeElement.value;

    if (name != '' && email != '' && message != '') {
      this.retMessage = 'Email has been send!';
      this.messageType = 'sended';
      this.name.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.message.nativeElement.value = '';
    } else {
      if (name == '') {
        this.retMessage = 'Name is incorrect';
      } else if (email == '') {
        this.retMessage = 'Email is incorrect';
      } else if (message == '') {
        this.retMessage = 'Message is incorrect';
      }
      this.messageType = 'error';
    }
  }
}
