A package that lets you wait for things.

usage:
```
import { wait } from m-waiter;

const someAsyncFunction = async () => {
    doSomething();
    await wait(2000);
    doSomethingAfter2Seconds();
};
```