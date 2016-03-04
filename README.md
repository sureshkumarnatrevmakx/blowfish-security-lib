# npm-woocommerce-api
Blowfish encryption in javascript.

## Installation

To install the module using NPM:

```
npm install blowfish-security-lib --save
```

## Examples 

**To encrypt a message** 

	var Blowfish = require('./blowfish');

	var bf = new Blowfish("secret key");
	var encrypted = bf.encrypt("text");
	console.log(encrypted);

**To decrypt a ciphertext** 

	var Blowfish = require('./blowfish');

	var bf = new Blowfish("secret key");
	var encrypted = bf.encrypt("text");
	console.log(encrypted);
	var decrypted = bf.decrypt(encrypted);

	console.log(decrypted);


## Testing

```
npm test
```

# License
[GPL 3.0](http://www.gnu.org/licenses/gpl-3.0.en.html)