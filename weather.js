
const container = document.querySelector('.container');
const search = document.querySelector('.search-bar button');
const weathercontainer = document.querySelector('.weather-container');

search.addEventListener('click', () => {
  const APIKey = '2e2d27cfcd7aae7b4373cef6799091ee';
  const city = document.querySelector('.search-bar input').value;
  if (city == "")
    return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response => response.json()).then(json => {

    const image = document.querySelector('.weather-container img');
    const cloud = document.querySelector('.weather-container .cloud');
    const cloudysky = document.querySelector('.weather-container .cloudysky');

    switch (json.weather[0].main) {
      case 'Clear':
        image.src = 'image/clear.png';
        break;
      case 'Rain':
        image.src = 'image/rain.png';
        break;
      case 'Clouds':
        image.src = 'image/cloud.png';
        break;
      case 'Mist':
        image.src = 'image/mist.png';
        break;
      case 'Snow':
        image.src = 'image/snow.png';
        break;

      default:
        image.src = 'image/clouds.png';
        break;

    }

    cloud.innerHTML = `${parseInt(json.main.temp - 273.15)}°C`;
    cloudysky.innerHTML = `${json.weather[0].description}`


  })


})
