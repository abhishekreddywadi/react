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
