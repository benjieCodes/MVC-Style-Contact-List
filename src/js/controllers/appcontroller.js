import $ from 'jquery';



export class AppController {


  constructor(contactForm, contactArea, contactListElem) {
    this.contactForm = contactForm;
    this.contactArea = contactArea;
    this.contactList = contactListElem;
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
        return $('.input').val('');
      }
    });
   }


  //  let name          = $('.nameInput').val();
  //  let photo         = $('.photoInput').val();
  //  let phone         = $('.phoneInput').val();
  //  let location      = $('.locationInput').val();        let resetInput    = $('.input').val('');
   //
  //  submitContact(nameInput, photoInput, phoneInput, locationInput, resetInput) {
  //   this.contactForm.on('submit', function (event) {
  //     event.preventDefault();
  //     let nameInput     = $('.nameInput').val();
  //     let photoInput    = $('.photoInput').val();
  //     let phoneInput    = $('.phoneInput').val();
  //     let locationInput = $('.locationInput').val();
  //     let resetInput = $('.input').val('');
  //     console.log(nameInput, photoInput, phoneInput, locationInput, resetInput);
  //   });
  //  }
}
