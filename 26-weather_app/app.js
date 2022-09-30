const country = document.querySelector('#country');
const city = document.querySelector('#city');
const check = document.querySelector('#check');

const tempIcon = document.querySelector('#tempIcon');
const weatherCountry = document.querySelector('#weatherCountry');
const temperature = document.querySelector('#temperature');
const weatherDescription = document.querySelector('#weatherDescription');

const feelsLike = document.querySelector('#feelsLike');
const humidity = document.querySelector('#humidity');
const longitude = document.querySelector('#longitude');
const latitude = document.querySelector('#latitude');

check.onclick = () => {
    let key = 'f387f708e9c3f1fa93731133a08dcde0';
    let url = `api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&APPID=${key}`;

    fetch(url).then(response =>{
        return response.json();
    }).then(data=>{
        console.log(data);
        weatherCountry.innerText=`${data.name}/${data.sys.country}`;
        temperature.innerHTML =`${data.main.temp}&deg;<b>C</b>`;

        data.weather.forEach(items => {
            weatherDescription.innerText=items.description;

            //! use Open Weather Map Url for Icons if you want to use 

            let iconsForTemp = `openweathermap.org/img/vpn/${items.icon}.png`;
            tempIcon.src = iconsForTemp;
        });
        
        feelsLike.innerText = `Feels Like ${data.main.feels_like}&deg;C`;
        humidity.innerText = `Feels Like ${data.main.humidity}`;
        latitude.innerText = `Feels Like ${data.coords.lat}`;
        longitude.innerText = `Feels Like ${data.coords.lon}`;
    });
    addToLocalStorage(city.value, country.value);
    city.value = "";
    country.value = "";
}

//* local storage

const addToLocalStorage = (city, country) => {
    let mode = { city, country };
    localStorage.setItem('mode', JSON.stringify(mode));
};

const getLocalStorage = () => {
    return localStorage.getItem('mode') ? JSON.parse(localStorage.getItem('mode')) : [];
};

//* Setup Items
const setUpItems = () => {
    let items = getLocalStorage();
    city.value = items.city;
    country.value =items.country;
};
window.addEventListener('DOMContentLoaded', setUpItems);