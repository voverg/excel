console.log('I am a piska module.js');


async function zhopa() {
    return await Promise.resolve('Async is good functions...');
}

zhopa().then(console.log);
