let course = new Map();

course.set("react", {description: "UI"});
course.set("jest", {description: "Testing"});

console.log(course);
console.log(course.react); //undefined

// A Map is different than an Object, 
// so we can't acess Keys with dot notation.

console.log(course.get("react"));

let details = new Map([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"]}],
    ["items", [1, 2]]
]);

console.log(details.size);

//iterate through a Map Object
details.forEach(function(item) {
    console.log(item);
});

// You would want to use something other than a string as key.
// Unlike objects, maps iterate it's elements in their insertion order unlike objects.