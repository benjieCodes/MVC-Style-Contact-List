export class Contact {

  constructor(firstName, lastName, url, phone, city, state) {
    this.name = {first: firstName, last: lastName};
    this.photo = url;
    this.phone = phone;
    this.location = {city: city, state: state}
  }

}
