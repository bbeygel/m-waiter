module.exports = {
    wait(time = 1000) {
        await new Promise(resolve => {
            setTimeout(() => resolve(null), time);
        });
    }
};