let dateStart=document.getElementById('input-date');

let dateNow= new Date();

// Định dạng Y-m-d cho dateNow;
 let d=dateNow.getDate();
 if (d<10){
     d="0"+d;
 }
 let m=dateNow.getMonth()+1;
 if(m<10){
     m="0"+m;
 }
 let y=dateNow.getFullYear();
 let date=`${y}-${m}-${d}`;

let btnDisplayNoD=document.getElementById('btn-setting-dateHearbreaker');
let nod=document.getElementById('number-of-date');
btnDisplayNoD.addEventListener('click',()=>{
    let a=new Date(dateStart.value);
    day=Math.round((dateNow.getTime()-a.getTime())/(1000*60*60*24))
    nod.innerHTML=` Bạn đã cu đơn ${day} ngày `;
})
