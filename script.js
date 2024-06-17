//api call - https://api.weatherapi.com/v1/current.json?key=792c455e78e349be8ad133652241606&q=Delhi&aqi=no
//Colour palatte https://www.canva.com/colors/color-palettes/summer-splash/
let form=document.querySelector('form');
let temp=document.querySelector('#temp');
let loc=document.querySelector('#location');
let datetime=document.querySelector('#datetime');
let img=document.querySelector('img');
let weathercondn=document.querySelector('#condn');

let input=document.querySelector('input');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const searchtext=input.value;
    getWeather(searchtext);
});

async function getWeather(place){
    try{
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=792c455e78e349be8ad133652241606&q=${place}`);
        const data=await response.json();
        console.log(data);
        let currcondn=data.current.condition.text;
        console.log(currcondn);
        let currimg=data.current.condition.icon;
        console.log(currimg);
        let currtemp=data.current.temp_c;
        console.log(currtemp);
        let currtimedate=data.location.localtime;
        console.log(currtimedate);
        let currlocation=data.location.name;
        console.log(currlocation);
        updateDom(currcondn,currimg,currtemp,currtimedate,currlocation);
    }
    catch(error){
        alert('Please enter valid location');
        console.log(error);
    }    
}
function updateDom(currcondn,currimg,currtemp,currtimedate,currlocation){
    temp.innerText=currtemp;
    loc.innerText=currlocation;
    datetime.innerText=currtimedate;
    weathercondn.innerText=currcondn;
    img.src='https:'+currimg;
}