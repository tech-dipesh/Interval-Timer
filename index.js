
    let allButtons = document.getElementById("buttons")
    let showTime = document.getElementById('show-time');
    let minute = document.getElementById("minute")
    let second = document.getElementById("second")
    let milSec = document.getElementById("milli-sec")
    let Laps = document.getElementById('Laps');

    let totalTime = 0, lapsCount=0;
    var InterValTimer;
    parseInt(totalTime)

    
    let storeArray = [];


    const createATable = () => {
    const createHead = document.createElement("table");
    const createTableHead = document.createElement("thead");
    let firstHead = document.createElement("tr");
    
    let LapsHead = document.createElement("th");
    let TimeHead = document.createElement("th");
    let TotalHead = document.createElement("th");
    
    lapTh.innerText = "Laps";
    timeTh.innerText = "Time";
    totalTh.innerText = "Total";
    

    let trCreateSecond=document.createElement("tr")
    let firstTableData=document.createElement("td")
    let secondTableData=document.createElement("td")
    let thirdTableData=document.createElement("td")

    firstTableData.innerText=lapsCount;
    lapsCount++;
    


    firstHead.append(lapTh, timeTh, totalTh);
    
    createTableHead.appendChild(firstHead);
    createHead.appendChild(createTableHead);
    
    Laps.appendChild(createHead);
    
    console.log(Laps);
    }


    const showTimingFun = () => {
      totalTime += 1;
      let convertIntMillisecond = Math.floor(totalTime % 100)
      let convertIntSecond = (Math.floor((totalTime / 60)) % 100) % 60
      let convertIntMinute = Math.floor(((totalTime / (60 * 60))) % 100) % 60
      let convertIntHour = Math.floor((totalTime / (60 * 60 * 60)) % 100) % 60

      let totalMilliseond = String(convertIntMillisecond).padStart(2, '0')
      let totalSecond = String(convertIntSecond).padStart(2, '0')
      let totalMinute = String(convertIntMinute).padStart(2, '0')
      let totalHour = String(convertIntHour).padStart(2, '0')
      showTime.innerText = `${totalHour}:${totalMinute}:${totalSecond}:${totalMilliseond}`
    }

    allButtons.addEventListener('click', (e) => {
      if (e.target.id == "start") {
        InterValTimer = setInterval(showTimingFun, 10);
      }
      if (e.target.id == "stop") {
        // Whenever 0 we click.
        if (totalTime == 0) {
          return;
        }
        clearInterval(InterValTimer)
        if(e.target.id=="stop") e.target.innerText = "Restart"
      }
      if (e.target.id == "button-lap") {
        let newDiv = document.createElement("div")
        newDiv.innerText = `${parseInt(((totalTime / (60 * 60 * 60)) % 100) % 60)}:${parseInt(((totalTime / (60 * 60))) % 100) % 60}:${parseInt(((totalTime / 60) % 100) % 60)}:${parseInt(totalTime % 100)}`
        Laps.appendChild(newDiv)

        createATable();
      }

    })

    
    var StoreValluueTime=`${parseInt(((totalTime / (60 * 60 * 60)) % 100) % 60)}:${parseInt(((totalTime / (60 * 60))) % 100) % 60}:${parseInt(((totalTime / 60) % 100) % 60)}:${parseInt(totalTime % 100)}`
