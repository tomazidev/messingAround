// //Object.prototype
// //Person.prototype

// // Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   this.calculateAge = function(){
//     const diff =  Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // Calculate age
// // Person.prototype.calculateAge = function(){
// //   const diff =  Date.now() - this.birthday.getTime();
// //   const ageDate = new Date(diff);
// //   return Math.abs(ageDate.getUTCFullYear() - 1970);
// // }

// // // Get full name
// // Person.prototype.getFullName = function(){
// //   return `${this.firstName} ${this.lastName}`;
// // }

// // // Gets Married
// // Person.prototype.getsMaried = function(newLastName){
// //   this.lastName = newLastName;
// // }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);
// console.log(mary.prototype)

// // console.log(john.calculateAge());

// // console.log(mary.getFullName());

// // mary.getsMaried('Smith');

// // console.log(mary.getFullName());

// // console.log(mary.hasOwnProperty('firstName'));
// // console.log(mary.hasOwnProperty('getFullName'));

const ClassRoom = function (number, floor, building) {
    this.number = number;
    this.floor = floor;
    this.building = building;
}

// ClassRoom.prototype.getClassRoomInfo = function () {
//   return `The class room is located in ${this.building} on the ${this.floor} floor, Room number ${this.number}`
// }

const Students = function (number, floor, building, name, surname, age) {
  ClassRoom.call(this, number, floor, building);

  this.name = name;
  this.surname = surname;
  this.age = age;

}
Students.prototype.getStudentInfo = function () {
  return this.name;
}

// const Teacher = function (breed) {
//   this.breed = breed
//   this.getBreed = function () {
//     return this.breed;
//   }
// }



// const room = new ClassRoom(123, 2, 'White Building');

const student = new Students(1, 2, 'white building', 'John', 'Smith', 17);
const test = student.getStudentInfo();

// const x = Object.create(room);
console.log(student);
console.log(test);
