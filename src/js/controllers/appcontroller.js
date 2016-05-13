import $ from 'jquery';
import { Contact } from '../models/contactmodel';

export class AppController {


  constructor(contactForm, contacts) {
    this.contactForm = contactForm;
    this.contactList = contacts;
  }

  initialize() {
    this.submitContact();
  }

  submitContact() {
    this.contactForm.on('submit', (event) => {
      event.preventDefault();
      let name          = this.contactForm.find('.nameInput').val();
      let photo         = this.contactForm.find('.photoInput').val();
      let phone         = this.contactForm.find('.phoneInput').val();
      let location      = this.contactForm.find('.locationInput').val();
      if (name.length < 1) {
        alert('Please enter your name before submitting')
      } else if (photo.length < 1) {
        alert('Please enter your photo url before submitting')
      } else if (phone.length < 1) {
        alert('Please enter your phone number before submitting')
      } else if (location.length < 1) {
        alert('Please enter your city, state before submitting')
      } else {
        this.submitToList(name, photo, phone, location);
        return $('.input').val('');
      }
    });
   }

   submitToList(name, photo, phone, location) {
     let contact = new Contact(name, photo, phone, location);
     console.log(contact);
     this.appendContactsToHTML(contact)
   }

   appendContactsToHTML(object) {
     let contactHTML = this.contactTemplate(object)
     this.contactList.append(contactHTML);
   }


   contactTemplate (object) {
     return `
     <li>
     <p class="name">${object.name}</p>
     <p class="photo">${object.photo}</p>
     <p class="phone">${object.phone}</p>
     <p class="location">${object.location}</p>
     </li>
     <hr>
     `;
   }


}
