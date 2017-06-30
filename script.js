'use strict';
/* ************** Using Object Literals ************** */
var Car = {
    model: 'lancer',
    year: '2016',
    price: '500',
    getInfo: function () {
        return this.model + ' ' + this.year + ' ' + this.price;
    }
}
console.log('Car Model :' + Car.model);
console.log('Car Model Year : ' + Car.year);
console.log('Car Price : ' + Car.price);
console.log(Car.getInfo());
/* ************** Using Constructor Function ************** */
function Person (fName, lName, age) {
    this.firstname = fName;
    this.lastname = lName, 
    this.age = age; 
}
var ahmed = new Person('Ahmed', 'Nasser', 20);
console.log(ahmed);
console.log(ahmed.firstname);
console.log(ahmed.lastname);
console.log(ahmed.age);

var eslam = new Person('Eslam', 'Nasser', 17);
var hany = new Person('Hany', 'Mohamed', 25);
