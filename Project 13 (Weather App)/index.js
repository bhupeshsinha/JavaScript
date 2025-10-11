const cityName = document.getElementById('cityName');
const btn = document.getElementById('searchBtn');
const API_KEY = 'baf4c2d60dfd41addb755a5b080fe7da'


// API: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// API: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

async function fetchData(city){

    try{
        cityName.value = '';
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        let result = await response.json();
        
        if(result.message){
            document.getElementById('secondDiv').innerHTML = '<h1 style="color:red;">'+result.message+'</h1>';
            return;
        }

        displayWeather(result);
    }catch(err){
        console.log(err.message);
    }
}

async function fetchDataByCoordinates(lat, lon){

    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        let result = await response.json();
        
        if(result.message){
            document.getElementById('secondDiv').innerHTML = '<h1 style="color:red;">'+result.message+'</h1>';
            return;
        }

        displayWeather(result);
    }catch(err){
        console.log(err.message);
    }
}


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    fetchData(cityName.value);
})

function displayWeather({name, main, wind, weather}){
    div = 
    `
            <div id="weatherInfo">
                <p id="temp">${main.temp}°C</p>
                <h2>${weather[0].description}</h2>
                <img src="https://openweathermap.org/img/w/${weather[0].icon}.png"//>
                <p id="city">${name}</p>
                <div class="otherInfo">
                    <div class="wind">
                        <p>Wind</p>
                        <p>${((wind.speed * 18) / 5).toFixed(2)} kmph</p>

                    </div>
                    <div class="wind">
                        <p>Pressure</p>
                        <p>${main.pressure}</p>
                    </div>
                    <div class="wind">
                        <p>Humidity</p>
                        <p>${main.humidity}%</p>
                    </div>
                </div>
            </div>
    `;
    document.getElementById('secondDiv').innerHTML = div
}


document.getElementById('currLoc').addEventListener('click', ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        // console.log(lat);
        // console.log(lon);
        fetchDataByCoordinates(lat, lon);
    })
});