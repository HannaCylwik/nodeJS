// ZADANIE 1

// const utils = require ('./utils');

// const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

// const funcResult = utils.uniq(someArray);

// console.log(funcResult);

// ZADANIE 2

// const utils = require ('./utils');

// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];

// console.log(utils.diff(tabA, tabB));
// console.log(utils.diff(tabB, tabA));

// ZADANIE 3

// const utils = require ('lodash');

// // const tabA = ['ala', 'ma', 'kota'];
// // const tabB = ['ala', 'ma', 'psa'];

// // console.log(utils.difference(tabA, tabB));
// // console.log(utils.difference(tabB, tabA));

// // ZADANIE 4

// // const lod = require ('lodash');

// // let array = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];

// // console.log(lod.min(array));
// // console.log(lod.max(array));

// // ZADANIE 6, 7, 8

// const yargs = require('yargs').argv;
// const utils = require('./utils');
// let fs = require('fs');

// let x = yargs.operator;
// let a = yargs.a;
// let b = yargs.b

// switch (x){
//     case '+':
//         console.log(utils.add(a,b, function jebać (wynik) {
//             console.log(wynik);
//             fs.writeFile('pierdoleto.txt', wynik, 'utf-8', function po(){
//                 console.log("drfghjkkol;")
//             })
//         }));
//         break;
//     case '*':
//         console.log(utils.multi(a,b));
//         break;
// }

// console.log(yargs);
// console.log(utils);

// utils.add(2, 4, function someCallback(wynik) {
//     console.log (wynik);
// } )

// ZADANIE 9, 10

// const fs = require('fs');
// const os = require ('os');
// // function name (){
// //     console.log("Witaj " + os.userInfo().username);
// // }

// const name = () => {console.log("Witaj " + os.userInfo().username);
// fs.writeFile('eremir.txt', os.userInfo().username, 'utf-8', function zapisPliku(){
//     console.log('zapisane');
// })
// }

// setTimeout(name, 5000)

// ZADANIE 11, 12

// const yargs = require('yargs').argv;
// const request = require('openweather-apis');

// request('http://stackabuse.com', function(err, res, body) {
//     console.log(body);

// console.log(request);

// console.log(request.getCity())

// let city = request.setCity('gem');
// console.log(city)
// console.log(request.setCity())

const request = require("request");
const argv = require("yargs").argv;

let city = argv.city;

let getWeather = function(callback) {
  let url = "adresurl" + city;
  requestAnimationFrame(url, function(err, response, body) {
    callback(body);
  });
};

getWeather(function(weatherInfo) {
  console.log(weatherInfo);
});
