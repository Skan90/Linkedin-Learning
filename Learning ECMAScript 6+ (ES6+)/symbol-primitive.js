const id = Symbol(); // great for avoiding naming conflicts

const courseInfo = {
    title: "JavaScript",
    topics: ["strings", "arrays", "objects"],
    id: "js-course"
};

courseInfo[id] = 42;
console.log(courseInfo);

console.log(courseInfo[id]);