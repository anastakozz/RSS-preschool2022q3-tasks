const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const nam = document.querySelector('.name');
const body = document.querySelector('body');
let randomNum;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const error = document.querySelector('.weather-error');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');


function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-En', options);
    day.textContent = currentDate;
}

function showTime() { 
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate()
  }
showTime();

function getTimeOfDay(hours) {
    const timeOfDayArr = ['morning','afternoon','evening','night'];
    if ( hours < 6) {
        return timeOfDayArr[3];
    } else if (hours < 12) {
        return timeOfDayArr[0];
    } else if (hours < 18) {
        return timeOfDayArr[1];
    } else {
        return timeOfDayArr[2];
    }
}

function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `Good ${timeOfDay},`;
    greeting.textContent = greetingText;
}
showGreeting()



function getRandomNum(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNum(1,20);

function setBg() {
    const img = new Image();
    const timeOfDay = getTimeOfDay(new Date().getHours());
    const bgNum = `${randomNum}`.padStart(2,'0');
    img.src = "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/" + bgNum + ".jpg";
    img.onload = () => {  
        body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/" + bgNum + ".jpg')";
    };     
}

setBg();

function getSlideNext() {
    randomNum += 1;
    if (randomNum == 21) {
       randomNum = 1;
    }
    setBg();
}

function getSlidePrev() {
    randomNum -= 1;
    if (randomNum == 0) {
        randomNum = 20;
    }
    setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);


async function getWeather() {  
    try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=ca665a286b70a2c3c2a046e485563968&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    error.textContent = '';
} catch (err) {
        error.textContent = 'City not found';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
    }
    
}

city.addEventListener('change', getWeather);


function setLocalStorage() {
    localStorage.setItem('name', nam.value);
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      nam.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        getWeather();
      }
}
window.addEventListener('load', getLocalStorage);


async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 

    function getRandom(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let i = getRandom(1,1643);
    
    quote.textContent = data[i].text;
    author.textContent = data[i].author;
}
getQuotes();

changeQuote.addEventListener("click", getQuotes);




