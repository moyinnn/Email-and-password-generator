
const generatePassword = require('generate-password');

    function RandomPassword() {

    const password = generatePassword.generate({
    length: 5, 
    numbers: true, 
    symbols: true, 
    });

    console.log("Generated password: " + password);
    }

    RandomPassword();