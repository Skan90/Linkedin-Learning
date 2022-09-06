const planet = "Earth";

console.log(planet.startsWith("Ear"));

console.log(planet.startsWith("ear")); // case sensitive

console.log(planet.endsWith("th"));

console.log(planet.endsWith("s")); //false

console.log(planet.includes("h"));

console.log(planet.includes("Earth1")); //false as it is a partial match

console.log(planet.includes("art")); // true

console.log(planet.search("art")); // position 1, but it only shows the 1st position/instance even if it's present more than once

