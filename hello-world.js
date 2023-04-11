    console.log("HELLO WORLD!")

    const http = require('http');
    const fs = require('fs');
    const generatePassword = require('generate-password');


    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write('<h1>HELLO WORLD!</h1>')
    res.end();
    });

    const port = 3000;
    server.listen(port, () => {
    console.log('<h1>Hello Node!!!!</h1>');

    fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File "welcome.txt" created successfully!');
    });


    fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data read from "hello.txt":');
    console.log(data);
    });
    });
    
    const password = generatePassword.generate({
    length: 12,
    numbers: true
    });

    console.log(`Generated password: ${password}`);