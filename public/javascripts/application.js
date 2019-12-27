//
// const foundLocationDiv = document.querySelector('.foundLocation');
// foundLocationDiv.classList.add('showCard');
//
// searchForm && searchForm.addEventListener('submit', async (event) => {
//     event.stopPropagation();
//     //event.preventDefault();
//
//     const response = await fetch('/search/location', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({cityName: event.target.location.value})
//     });
//
//     const result = await response.json();
//     const currentTime = result.time;
//     const city = result.response.info.tzinfo.name
//     const {
//         icon,
//         temp,
//         feels_like,
//         condition,
//         wind_speed,
//         humidity,
//         daytime,
//         season
//     } = result.response.fact;
//     const forecasts = result.response.forecasts[0].hours;
//     console.log(forecasts);
//
//         foundLocationDiv.classList.remove('showCard');
//         const iconUrl = `https://yastatic.net/weather/i/icons/blueye/color/svg/${icon}.svg`;
//         const cityNameDiv = document.querySelector('#cityName');
//         const iconDiv = document.querySelector('.iconCurrentDate');
//         const currentTimeDiv = document.querySelector('#currentTime');
//         const degree = document.querySelector('.degree');
//         const conditionP = document.querySelector('.condition');
//         const feelsP = document.querySelector('.feelsLike');
//         degree.innerHTML = `${temp} °C`;
//         iconDiv.setAttribute('src', iconUrl);
//         cityNameDiv.innerHTML = city;
//         currentTimeDiv.innerText = `Now at ${currentTime}`;
//         conditionP.innerHTML = condition;
//         feelsP.innerHTML = `${feels_like} °C`;
//
//
// })
// let b = {
//     "hour": "0",
//     "hour_ts": 1577394000,
//     "temp": 0,
//     "feels_like": -3,
//     "icon": "ovc_ra_sn",
//     "condition": "overcast-and-wet-snow",
//     "wind_speed": 1,
//     "wind_gust": 3,
//     "wind_dir": "e",
//     "pressure_mm": 744,
//     "pressure_pa": 992,
//     "humidity": 91,
//     "uv_index": 0,
//     "soil_temp": 0,
//     "soil_moisture": 0.35,
//     "prec_mm": 0.1,
//     "prec_period": 60,
//     "prec_prob": 60,
//     "prec_type": 2,
//     "prec_strength": 0.25,
//     "cloudness": 1
// },
