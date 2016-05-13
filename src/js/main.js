import $ from 'jquery';
import _ from 'lodash';


// import models
import { Contact } from './models/contact';
import { ContactModel } from './models/contactmodel';
import { AppController } from './controllers/appcontroller';

// variables to control HTML using jQuery
let contactForm   = $('.contactForm');
let nameInput     = $('.nameInput').val();
let photoInput    = $('.photoInput');
let phoneInput    = $('.phoneInput');
let locationInput = $('.locationInput');
let submitContact = $('.submitContact');
let contactList   = $('.contactList');


console.log(nameInput);
// instantiate the classes
let contact = new Contact();
let contactModel = new ContactModel();
let appController = new AppController(contactForm, contactList, contactModel);
console.log(appController);
appController.runFunctions();
