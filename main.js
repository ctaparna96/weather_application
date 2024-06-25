const search= async() => {

    console.log('inside search');
    let cityName = city.value
    // console.log(cityName);
    capCity = cityName.toUpperCase()
    // console.log(capCity);

    if(cityName){
        
        welcomedivshow.style.display = "none"   //welcome page is hidden
        welcomeDiv.style.display = "block"      //content is on display
        invalidText.style.visibility = 'hidden' //invalid msg is hidden
        errordiv.style.display = 'none'         //error code
        suggest.style.display = 'block'         //ai suggestion

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=181db3d6821703785b67e3da3cf06990`)

        response.json().then((data)=>{
            // console.log(data);
            
            let cityCode = data.cod
            console.log(cityCode);   

            if (cityCode != 404) {
                welcomedivshow.style.display = "none";

                let temperature = data.main.temp;
                console.log(temperature);
                let tempC = (temperature-273.15).toFixed(2);

                let feels_like = data.main.feels_like
                console.log(feels_like);
                let feelsC = (feels_like-273.15).toFixed(2);

                let pressure = data.main.pressure;
                console.log(pressure);

                let humidity = data.main.humidity;
                console.log(humidity);

                let wind = data.wind.speed;
                console.log(wind);

                let country = data.sys.country;
                console.log(country);

                let cloud_desc =  data.weather[0].description
                console.log(cloud_desc);

                let cloudd = data.weather[0].main
                console.log('clouddddd',cloudd);

                const currentDate = new Date();

                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                const day = days[currentDate.getDay()];
                const month = months[currentDate.getMonth()];
                const date = currentDate.getDate();
                const hours = currentDate.getHours();
                const minutes = currentDate.getMinutes();
                const period = hours >= 12 ? 'PM' : 'AM';
                const formattedHours = hours % 12 || 12;
                const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

                const currentTime = `${day} ${month} ${date}, ${formattedHours}:${formattedMinutes} ${period}`;

                console.log(currentTime);

                // citys.innerHTML = `<h4 id="citys">${capCity}, ${country}</h4>`
                // time.innerHTML = `<h6 id="time"> ${day} ${month} ${date}, ${formattedHours}:${formattedMinutes} ${period} </h6>`
                // t_emperature.innerHTML = `<h2 id="t_emperature">${tempC}°C</h2>`
                // feels__like.innerHTML = `<h6 id="feels__like">${feelsC} °C</h6>`
                // c_louds.innerHTML = `<h4 id="c_louds">${cloud_desc}</h4>`
                // h_umidity.innerHTML = `<p id="h_umidity"><i class="fa-solid fa-droplet"></i> ${humidity} %</p>`
                // w_ind.innerHTML = `<p id="w_ind"><i class="fa-solid fa-wind"></i> ${wind} m/s</p>`
                // p_ressure.innerHTML = `<p id="p_ressure"><i class="fa-solid fa-gauge-simple"></i> ${pressure} hPa</p>`

                welcomeDiv.innerHTML = `
                        <div class="NameCountry">
                            <h4 id="citys"><i class="fa-solid fa-location-dot fa-xs"></i> ${capCity}, ${country}</h4>
                            <h6 id="time">${day} ${month} ${date} , ${formattedHours}:${formattedMinutes} ${period}</h6>
                        </div>
                        <div class="weatherImg">
                            <img src="./images/day.png" alt="" class="imageS" id="iconWeather">
                            <h2 id="t_emperature">${tempC}°C</h2>
                            <h5 id="feels__like"> feels like ${feelsC} °C</h5>
                            <h4 id="c_louds">${cloud_desc}</h4>
                        </div>
                        <div class="tempLower">
                            <p id="h_umidity"><i class="fa-solid fa-droplet"></i> ${humidity} %</p>
                            <p id="w_ind"><i class="fa-solid fa-wind"></i>  ${wind} Km/h</p>
                            <p id="p_ressure"><i class="fa-solid fa-gauge-simple"></i> ${pressure} hPa</p>
                        </div>`

                        if(cloudd == 'Clouds'){
                            iconWeather.src = './images/day.png'
                           }
                           else if(cloudd == 'Clear'){
                            iconWeather.src = './images/sunny.png'
                           }
                           else if(cloudd == 'Rain'){
                            iconWeather.src = './images/sunthunder.png'
                           }
                           else if(cloudd == 'Drizzle'){
                            iconWeather.src = './images/rain.png'
                           }
                           else if(cloudd == 'Snow'){
                            iconWeather.src = './images/snow.png'
                           }
                           else{
                            iconWeather.src = './images/day.png'
                           }

                           if(tempC>0 && tempC<=15){
                            suggest.innerHTML=` 
                            <h5>"Stay Weather-Smart: Essential Tips!"</h5>
                            <ul class="list">
                                 <li><i class="fa-solid fa-cloud"></i> Layered Clothing</li>
                                 <li><i class="fa-solid fa-cloud"></i> Hat and Gloves</li>
                                 <li><i class="fa-solid fa-cloud"></i> Scarf or Neck Gaiter</li>
                                 <li><i class="fa-solid fa-cloud"></i> Waterproof Footwear</li>
                                 <li><i class="fa-solid fa-cloud"></i> Water Bottle</li>
                             </ul>`
                         }
                         else if(tempC>15 && tempC<=35){
                             suggest.innerHTML=` 
                             <h5>"Stay Weather-Smart: Essential Tips!"</h5>
                             <ul class="list">
                                 <li><i class="fa-solid fa-cloud"></i> Stay hydrated </li>
                                 <li><i class="fa-solid fa-cloud"></i> Wear Sunscreen</li>
                                 <li><i class="fa-solid fa-cloud"></i> Wear lightweight clothing</li>
                                 <li><i class="fa-solid fa-cloud"></i> Wear Hat and Sunglasses</li>
                                 
                             </ul>`
                         }
                         else if(tempC>35){
                             suggest.innerHTML=` 
                             <h5>"Stay Weather-Smart: Essential Tips!"</h5>
                             <ul class="list">
                                 <li><i class="fa-solid fa-cloud"></i> Stay hydrated</li>
                                 <li><i class="fa-solid fa-cloud"></i> Drink electrolyte-rich beverages</li>
                                 <li><i class="fa-solid fa-cloud"></i> Wear Sunscreen</li>
                                 <li><i class="fa-solid fa-cloud"></i> Wear lightweight clothing</li>
                                 <li><i class="fa-solid fa-cloud"></i> Use Headgear</li>
                             </ul>`
                         }
                         else{
                             suggest.innerHTML=` 
                             <h5>"Stay Weather-Smart: Essential Tips!"</h5>
                             <ul class="list">
                                 <li><i class="fa-solid fa-cloud"></i> Layered Clothing</li>
                                 <li><i class="fa-solid fa-cloud"></i> Insulated Hat and Gloves</li>
                                 <li><i class="fa-solid fa-cloud"></i> Scarf or Neck Gaiter:</li>
                                 <li><i class="fa-solid fa-cloud"></i> Waterproof Footwear</li>
                                 <li><i class="fa-solid fa-cloud"></i> Stay hydrated</li>
                             </ul>`
         
                         }

            } else {
                // alert('not found')
                welcomeDiv.style.display = 'none'
                errordiv.style.display = 'block'
                suggest.style.display = 'none'
            }
        })
    }
    else{
        invalidText.style.visibility = 'visible'
    }
}