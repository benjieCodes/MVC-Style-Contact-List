import $ from 'jquery';
export class AppController {

  constructor(contactForm, contactArea, contactListElem) {
    this.contactForm = contactForm;
    this.contactArea = contactArea;
    this.contactList = contactListElem;
  }

  runFunctions() {
    this.submitContact();
  }

   submitContact() {
    this.contactForm.on('submit', function (event) {
      event.preventDefault();
      let name = nameInput.value();
      let photo = photoInput.value();
      let phone = phoneInput.value();
      let location = locationInput.value();
      console.log(name, photo, phone, location);
    });
   }

}
