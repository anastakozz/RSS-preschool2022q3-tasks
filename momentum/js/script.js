const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const nam = document.querySelector('.name');


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

function showGreeting() {
    const date = new Date();
    const hours = date.getHours();

    function getTimeOfDay() {
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

    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}
showGreeting()

function setLocalStorage() {
    localStorage.setItem('name', nam.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      nam.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)

//https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=ca665a286b70a2c3c2a046e485563968&units=metric

