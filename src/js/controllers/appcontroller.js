import $ from 'jquery';
import { Contact } from '../models/contactmodel';

export class AppController {


  constructor(contactForm, contacts) {
    this.contactForm = contactForm;
    this.contactList = contacts;
  }

  initialize() {
    this.submitContact();
    this.removeContactsFromHTML();
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

   removeContactsFromHTML() {
     this.contactList.on('click', '.removeClass', function(event) {
       event.preventDefault();
       $('li').remove();
     });

   }

   contactTemplate (object) {
     if (object.photo.substring(0,4) === 'http') {
       object.photo = object.photo;
     } else {
       object.photo = 'http://placehold.it/100x100';
     }
     return `
     <li>
     <p class="name">Name: ${object.name}</p>
     <img src=${object.photo} alt="photo of contact">
     <p class="phone">Phone Number: ${object.phone}</p>
     <p class="location">Location: ${object.location}</p>
     <div class="removeContact"> X </div>
     </li>
     `;
   }


}
