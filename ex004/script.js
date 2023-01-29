let student0001 = {
    name: "Gus",
    lastName: "Souza",
    gender: "male",
    birthYear: 2003,
    courseConclusion: 2030
}
let today = new Date();
let age = require("./calc");
let ageAfter = age.conclusionAge(student0001.birthYear, student0001.courseConclusion);
let ageNow = age.actualAge(student0001.birthYear, today.getFullYear());
let yearsLeft = ageAfter - ageNow;

console.log(student0001.name, student0001.lastName, "ends the course in", student0001.courseConclusion, "with", ageAfter, "years old by", yearsLeft, "years from now")
