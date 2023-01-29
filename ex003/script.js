// Node.js VS Chrome1
// Node does not need an index to run and process and node does not have window or document defined

try {
    console.log(window);
    console.log(document);
} catch {
    console.log("It was not possible to print window or document");
}

console.log("------");

console.log(process.argv); // Object that contains node path [0] and the path of the script runing [1]
//when you run | node script.js | you can add other arguments. ex: | node script.js 13 26 | those arguments will get pos [2] and beyond.

console.log("------");

if (process.argv[2] && process.argv[3] != undefined) { //executes only if there 2 arguments
    calculate(Number(process.argv[2]), Number(process.argv[3])); // Define that the argvs will be numbers
}

function calculate(x,y){
    let xx = x % 2;
    let yy = y % 2;

    if(xx == 0){ var xxx = "Even";} // checks if are odd or even
    else{ var xxx = "Odd";}
    
    if(yy == 0){ var yyy = "Even";}
    else{ var yyy = "Odd";}

    console.log("Antecessors of ", x, " and ", y, " are:", (x-1), " and ", (y-1));
    console.log("Adjacents of ", x, " and ", y, " are:", (x+1), " and ", (y+1));
    console.log(" ");
    
    console.log(x, " is ", xxx);
    console.log(y, " is ", yyy);
    console.log(" ");

    if(x > y){ console.log(x, " Is greater than ", y);} // says if are a grater number
    else{ console.log(x, " Is less than ", y);}
}