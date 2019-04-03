A package that lets you wait for things.

usage:
```
const wait = require('m-waiter');

const someAsyncFunction = async () => {
    doSomething();
    await wait(2000);
    doSomethingAfter2Seconds();
};
```