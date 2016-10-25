var util = require("util");
var b = require(".");
var output = b.b2cj("./literature.bib",
		    "en-US",
		    "./locales-en-US.xml",
		    "./ieee-with-url.csl");
console.log(JSON.stringify(output, null, 4));
