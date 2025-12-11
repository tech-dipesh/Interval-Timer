// setTimeout(() => {
//     console.log("This will print after 1 second.");
// }, 1000);


// console.log("Print before teh callback");


let minute=0, second=0;
let timer=0;
let Timer=setInterval(() => {
    timer+=1;
    minute=Math.floor(timer/60);
    second=timer%60;
    console.log(minute);
    console.log(second);
}, 1000);


// console.log(40%60);

console.log(0/60);
console.log(1/60);






    const buttonLapFeature=((e)=>{
      console.log(e);
      console.log("Button lap is clicked, ");
        let newDiv=document.createElement("div")
        newDiv.innerText=totalMilliseond
        Laps.appendChild(newDiv)
    })

    const IntervalTimer=((e)=>{
        totalMilliseond += 1;
        minute.innerText = Math.floor(totalMilliseond / (60*60))
        second.innerText = ((totalMilliseond / 60).toFixed(0))%60
        milSec.innerText = (totalMilliseond % 100).toFixed(0)
        console.log(e);
    })


        // () => {
        //     totalMilliseond += 1;
        //     minute.innerText = Math.floor(totalMilliseond / (60*60))
        //     second.innerText = ((totalMilliseond / 60).toFixed(0))%60
        //     milSec.innerText = (totalMilliseond % 100).toFixed(0)
        //     buttonStop.addEventListener("click", () => {
        //       buttonStart.innerText = "restart"
        //       buttonStop.innerText = "start";
        //       clearInterval(Interval)
        //     })
        //   },


clearInterval()