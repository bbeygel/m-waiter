const wait = require('./');

(async () => {
    const now = Date.now();
    await wait();
    console.log(Date.now() >= now + 1000);
})()