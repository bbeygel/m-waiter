const wait = async (time = 1000) => {
    await new Promise(resolve => {
        setTimeout(() => resolve(null), time);
    });
}

module.exports = wait
