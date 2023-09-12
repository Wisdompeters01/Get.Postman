// for every one sec

setInterval(() =>{
    // console.log("i am wisdom");
}, 1000);

// after one sec
setTimeout(() =>{
    // console.log("i am a guy"); 
}, 1000);

let attempts: number = 0;

setInterval(() =>{
    // console.log(`i am a guy `);
}, 2000);

setImmediate(() => {
//     console.log(`i am a wisdom and i am also a guy`)
});

setInterval(() => {
    let ad = "skip this ad in the next five secs";
    console.log(ad);

    setTimeout(() => {
        console.log(`click this button to skip ad`);
    }, 5000);
}, 1000);



function app (money){
    setInterval(() => {
        console.log(`${(money +=2)}`);
    }, 3000);
}
app(700);