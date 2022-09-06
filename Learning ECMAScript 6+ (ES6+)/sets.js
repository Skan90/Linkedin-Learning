let books = new Set();
books.add("The Hitchhiker's Guide to the Galaxy");
books.add("Memoirs of a Geisha").add("Oliver Twist"); //.add can be chained
books.add("The Hitchhiker's Guide to the Galaxy"); //values must be unique, so I can't add the same value again

console.log(books);
console.log(books.size);
books.delete("Oliver Twist");

//.map does not work with Sets, instead we use forEach

console.log("has Oliver Twist", books.has("Oliver Twist"));