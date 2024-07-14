const x: number = 1;
console.log(x);
const greet = (name: string) => {
  console.log("hello" + name);
};
greet("abhishek");
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(1, 2));
const isLegal = (a: number): boolean => {
  if (a >= 18) {
    return true;
  }
  return false;
};
const func1 = (func2: () => void) => {
  setTimeout(() => {
    func2();
  }, 1000);
};
// callback function

func1(() => {
  console.log("Hello");
});

// creating user object
const user = {
  name: "abhishek",
  age: 18,
};
// creating user interface
interface User {
  name: string;
  age: number;
}
// return islegal if the user is 18 by taking an user as an argument
const isLegal2 = (user: User): boolean => {
  if (user.age >= 18) {
    return true;
  }
  return false;
};
console.log(isLegal2(user));
// implementing interfaces
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}
const a = new Employee("Abhishek", 21);
console.log(a.name);
// implementing types in ts
// the main difference between the type and the interface is that in interface we can use the immplementation for class
// implementation of type

type PersonType = {
  name: string;
  age: number;
  greet(phrase: string): void;
};

// hence both type and the interface are same but the difference is as said above
// printing user id either number or the string
type GreateArgs = number | string;
const func3 = (id: GreateArgs) => {
  console.log(id);
};
func3(1);
func3("hello abhishek");
// another difference is you can write a arguments that take either of two like numbers or strings but not in interface

// Intersection in type

type Human = {
  name: string;
  age: number;
};

type Teacher = {
  subject: string;
};

type Student = Human & Teacher;
const t: Student = {
  name: "Abhishek",
  age: 21,
  subject: "Computer Science",
};
const student = (t: Student) => {
  console.log(t.name);
  console.log(t.age);
  console.log(t.subject);
};
// enumeration

enum Color {
  Red,
  Green,
  Blue,
}
const doSomething = (keypress: Color) => {
  console.log(Color.Red);
  console.log(Color[1]);
  console.log(Color.Green);
};
doSomething(Color.Blue);
// it will print number coressponding starts from 0

// Generics
const identity = <T>(arg: T) => {
  console.log(arg);
};

identity<string>("hello");
