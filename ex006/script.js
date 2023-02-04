let path = process.argv[2];
let width = Number(process.argv[3]);
const sharp = require("sharp");

function resize(path, width){

    sharp(path)
    .resize({
        width: width
    })
    .toFile("./temp/resized.jpg", (error) =>{
        if (error){
            console.log(error);
        }
        else{
            console.log("resized sucessfull")
        }
    })

}

resize(path, width);