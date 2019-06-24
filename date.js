var dateStart=document.getElementById('input-date');
var formDate = document.getElementById('settingDate')

formDate.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formDate.date.value)
    
    let dayCount = document.getElementById("days")
    let hoursMin = document.getElementById("hoursMins")

    setInterval(function() {

        let countDownDate = new Date(formDate.date.value).getTime();
        let now = new Date().getTime();
        let distance = now - countDownDate;
    
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

       
        dayCount.textContent = days + " ngày";
        hoursMin.textContent = hours + " giờ   " + minutes + " phút   " + seconds + "   giây ";
        
        
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("time-display").innerHTML = "EXPIRED";
        }
    }, 1000)
    // if (d<10){
    //     d="0"+d;
    // }
    // let m=dateNow.getMonth()+1;
    // if(m<10){
    //     m="0"+m;
    // }
    // let y=dateNow.getFullYear();
    // let date=`${y}-${m}-${d}`;

    // console.log(countDownDate)
})

// let dateNow= new Date();

// // Định dạng Y-m-d cho dateNow;
//  let d=dateNow.getDate();
//  if (d<10){
//      d="0"+d;
//  }
//  let m=dateNow.getMonth()+1;
//  if(m<10){
//      m="0"+m;
//  }
//  let y=dateNow.getFullYear();
//  let date=`${y}-${m}-${d}`;

// let btnDisplayNoD=document.getElementById('btn-setting-dateHearbreaker');
// let nod=document.getElementById('number-of-date');
// btnDisplayNoD.addEventListener('click',()=>{
//     let a=new Date(dateStart.value);
//     day=Math.round((dateNow.getTime()-a.getTime()) / (1000*60*60*24));
//     month=Math.round(day / 30);
//     year=Math.round(day / 365);

    
//     nod.innerHTML=` Bạn đã cu đơn ${year} ngày `;
// })
