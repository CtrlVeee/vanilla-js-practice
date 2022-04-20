const btn = document.querySelector("input[type='submit']")
const input = document.querySelector("input[type='text']")
const place = document.getElementById("place")
const temp = document.getElementById("temp")
const desc = document.getElementById("desc")
//console.log(btn.value)
console.log(input.value)
//console.log(desc.textContent)
apiKey = '6c786c4b9ac5f28acb4bf55cce87d835'

btn.addEventListener('click',function(){
    cityName = input.value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        place.textContent = data.name
        desc.textContent = data.weather[0].description
        temp.textContent = Math.round(data.main.temp - 273.15) + " degrees"
    })
    .catch(err => alert("city name bruh"))

})