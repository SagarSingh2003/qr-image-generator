//import modules
const qr =  require('qr-image');
const prompt = require('prompt-sync')();
const fs = require('fs');

//take user input
let user_input = prompt('Please enter your url here: ');

//convert the user_input into a stream of bytes with the image data
var pdf= qr.image(user_input , {type: 'pdf'});

//use the fs module to write the image data into a pdf file
pdf.pipe(fs.createWriteStream('userUrl.pdf'));
