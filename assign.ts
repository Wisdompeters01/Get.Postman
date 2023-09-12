import fs from "fs"
import { error } from "console"
import path from "path"



fs.mkdir("./Assignment", (error):void =>{
        if(error){
    console.log("an error in creating folder" +error)
        }else{
            console.log(error, "created successfully")
        }
    })
    let message1: string = "hello world"

    fs.writeFile(path.join(__dirname, "Assignment", "Assign.txt"),message1, (error):void=>{
     if(error){
        console.log("an error occured whilr creating file", error)
     }else{
        console.log("file created successfully")
     }
    })



    let randomtext = Math.floor(Math.random()*message1.length)


    setInterval(()=>{
        let message2: any = ["\nGod is Good", "\ni am a boy", "\nmy name is wisdom", "\nJesus is good", "\ni am kind","\ni am blessed", "\ni believe in God", "\ni am a winner", "\ni am a champion", "\ni am forever grateful", "\ndont giveup", "\nkeep pushing", "\ngo hard", "\nthank God for life"]

        let randomtext = Math.floor(Math.random()*message2.length)
        let empty:any = 0
        let message3 = message2[randomtext]

        fs.appendFile(path.join(__dirname, "Assignment", "Assign.txt"),message3, (error):void=>{
         if(error){
            console.log("an error occured whilr appending text", error)
         }else{
            console.log("file appended successfully")
         }
        })
    },3000)