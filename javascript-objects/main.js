var student = {
  firstName: 'Adrian',
  lastName: 'Arias',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Real Estate Photographer';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Telsa',
  model: 'Y',
  year: 2022
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Appa',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
