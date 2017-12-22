# fake-users-package
## create your fake users


## Installation

    npm i fake-users-package


## Usage

For use the fake Users

```js
var fakeusers = require('fake-users-package');

console.log('users', fakeusers.all()); // outputs all
console.log('users', fakeusers.add(
  {name: "Mario", surname: "Balotelli"})); // add your user
console.log('users', fakeusers.update(2,
    {name: "Mario", surname: "Biondi"})); // add your user
fakeusers.reset(); // reset fake users;
fakeusers.delete(1); // delete user with id 1
fakeusers.getById(1); // return user with id 1

```
