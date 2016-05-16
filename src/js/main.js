import $ from 'jquery';
import _ from 'lodash';

// import models
import { ContactList } from './models/contactmodel';
import { AppController } from './controllers/appcontroller';

// variables to control HTML using jQuery
let contactForm   = $('.contactForm');
let contactList   = $('.contactList');

// instantiate the classes
let appController = new AppController(contactForm, contactList);
appController.initialize();
