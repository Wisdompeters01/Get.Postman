import { error } from "console"
import fs from "fs"
import path from "path"

// fs.mkdir("./NewClass", (error):void => {
//     if(error){
//         console.log("an error in creating folder" , error)
//     }else{
//         console.log("Folder created successfully")
//     }
// })

const newMsg = "Help me Buy Food"
// fs.writeFile(path.join(__dirname , "NewClass", "OldFile.txt"),newMsg, (error):void =>{
//     if(error){
//         console.log("Error writing a file" , error)
//     }else{
//         console.log("New File Added")
//     }
// })
setInterval (() =>{
    let newMsg2 = "\nBuy snacks for joan"

    fs.appendFile(path.join(__dirname , "NewClass", "OldFile.txt"),newMsg2, (error):void =>{
        if(error){
            console.log("An error in appending file" , error)
        }else{
            console.log("New File Appended")
        }
    })
    }, 3000);


// setInterval (() =>{
    
//     let newMsg2 = "\nHello Everyone"

//     fs.appendFile(path.join(__dirname , "NewClass", "OldFile.txt"),newMsg2, (error):void =>{
//         if(error){
//             console.log("An error in appending file" , error)
//         }else{
//             console.log("New File Appended")
//         }
//     })
// }, 3000)