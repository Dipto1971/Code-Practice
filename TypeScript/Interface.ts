interface User {
  name: string;
  age: number;
  email: string;
}

type Users = User[];

const users: Users = [
  {
    name: "John",
    age: 30,
    email: "John.gmail.com",
  },
  {
    name: "Jane",
    age: 25,
    email: "Jane@g.com",
  },
  {
    name: "Doe",
    age: 35,
    email: "doe@gmail.com",
  },
];

function UserExists(users: Users, name: string): boolean {
  return users.some((user) => user.name === name);
}

console.log(UserExists(users, "John")); // true

// * This is a normal comment
// ! This is a warning
//  ? This is a question
// TODO: This is a todo
