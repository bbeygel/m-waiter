const wait = async (ms = 1000) => {
    await new Promise(resolve => {
        setTimeout(() => resolve(null), ms);
    });
}

module.exports = wait
