class Weather{
	constructor(city) {
		this.apiKey = "854aea542bc8e6b0ca73436e10e1434a";
		this.city = city;
	}

	// fetch weather api

	async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

		const resData = await response.json();

		return resData;
    }
    
    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
