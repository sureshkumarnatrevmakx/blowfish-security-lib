var Blowfish = require('./blowfish-security-lib');

var bf = new Blowfish("secret key");
var encrypted = bf.encrypt("text");
console.log(encrypted);
var decrypted = bf.decrypt(encrypted);

console.log(decrypted);

