// const request = require('request');


// const url = 'https://jsonplaceholder.typicode.com/users/1';

// request(url, (err, res, body) => {
//     // eval(require('locus'));
//     if (!err && res.statusCode === 200) {
//         const parsedData = JSON.parse(body)

//         console.log(`${parsedData.name} lives in ${parsedData.address.city}.`);
//     }
// })

// ========= promise version ===========

const rp = require('request-promise');


const url = 'https://jsonplaceholder.typicode.com/users/1';

rp(url)
    .then(body => {
        // process html

        const parsedData = JSON.parse(body)
        console.log(`${parsedData.name} lives in ${parsedData.address.city}.`);
    })
    .catch(err => {
        // handle error

        console.log('Error!', err);
    });