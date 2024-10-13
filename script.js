class Person {
  // Private fields
  #name; // Private variable for name
  #age;  // Private variable for age

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // Getter for name
  get name() {
    return this.#name;
  }

  // Setter for age
  set age(value) {
    this.#age = value;
  }

  // Getter for age
  get age() {
    return this.#age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent class constructor to set name and age
  }

  study() {
    console.log(`${this.name} is studying`); // Accessing #name via getter
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent class constructor to set name and age
  }

  teach() {
    console.log(`${this.name} is teaching`); // Accessing #name via getter
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
