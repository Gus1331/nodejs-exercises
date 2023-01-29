let fs = require("fs");
let documentation = [
    "fs 'File System' it is a form to use, write, read, check etc to other files",
];
function catchError(error){
    if(error){ throw error;};
}

fs.writeFile("documentation.txt", documentation[0], (error) =>{     // Creates or replaces a file
    if(error){ throw error;};
    console.log("documentation.txt File Created Sucessefuly");
});

fs.appendFile(                                                      //Merge content
    "documentation.txt",
    "Created by GuS: https://github.com/Gus1331",
    (error)=>{catchError(error); console.log("author added");}
);

fs.readFile("unwanted.txt","UTF8",(error,data)=>{                   //Read files and bring as data
    catchError(error);
    console.log("unwanted.txt File content:", data, "Now it wil be deleted.");
})

fs.unlink("unwanted.txt",(error)=>{                                 //Deletes Files
    catchError(error);
    console.log("unwanted.txt File Deleted Sucessefuly");
});