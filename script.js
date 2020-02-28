// let word = "asduahauhnaaunaaabfub";
// let count = 0;
// for(let i=0; i<word.length; i++){
//     if(word[i] === 'a'){
//         count++;
//     }
// }
// console.log(count);

// const isarray = require('isarray')
// console.log(isarray([]))

const password = "Hello";
const newPassword = "12345";
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
const result = bcrypt.compareSync(password, hash);
console.log(result)