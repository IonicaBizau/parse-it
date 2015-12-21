const parseIt = require("../lib");

// Replace strings
console.log(parseIt("Hello WORLD!", { WORLD: "Mars" }));
// => Hello Mars!

// Use functions
console.log(parseIt("Random number: random", { random: () => Math.random() }));
// => Random number: 0.21168493130244315

// Using as class
var Parser = parseIt.Parser;

// Display a date
var p = new Parser({
    d: function (d) { return d.getDate() }
  , M: function (d) { return d.getMonth() }
  , YYYY: function (d) { return d.getFullYear() }
});

console.log(p.run("d/M/YYYY", [new Date(1989, 11, 20)]));
// => 20/11/1989
