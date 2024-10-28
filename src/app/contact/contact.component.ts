import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone:true,
  imports:[CommonModule, FormsModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    const serviceID = 'service_zqomdpg';
    const templateID = 'template_o9mlm2e';
    const publicKey = 'waQNXHNPFXlrbio3z';


    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Message sent successfully!');
        // Optionally reset the form fields
        this.name = '';
        this.email = '';
        this.message = '';
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      });
  }
}
