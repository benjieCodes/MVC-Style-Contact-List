// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Contact } from '../src/js/models/contactmodel';
import { AppController } from '../src/js/controllers/appcontroller';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of MVC Structure', function () {

    it('should be an instance of a new contact when created', function () {
      let contact = new Contact();
      expect(contact).to.be.an.instanceof(Contact);
    });

    it('should be an instance of an application controller when created', function () {
      let app = new AppController();
      expect(app).to.be.an.instanceof(AppController);
    });

  });


});
