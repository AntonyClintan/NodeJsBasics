const {readFile, writeFile } = require('fs')
console.log("Starting.....");
// readFile('./subfolder/second.txt','utf-8',(err,result)=>{
readFile('./subfolder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first =result
    readFile('./subfolder/path.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second =result
        writeFile(
            './subfolder/result.txt',
            `Here is the Result : ${first} ,${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return
                }
                console.log("SuccessFully!!! Created File!");
            }
        )
    })
})
console.log("PLease check the folder");