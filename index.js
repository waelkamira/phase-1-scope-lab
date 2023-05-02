// declare customerName to be bob in global scope
var customerName = 'bob';

// Write a function that accesses that global customerName variable, and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Write a new function called overwriteBestCustomer() that changes that bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'someone';

// Write a function called changeLeastFavoriteCustomer() that attempts to change that constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}
