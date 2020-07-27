class UI {
	constructor() {
		this.location = document.querySelector(".w-location");
		this.description = document.querySelector(".w-desc");
		this.string = document.querySelector(".w-string");
		this.icon = document.querySelector(".w-icon");
		this.humidity = document.querySelector(".w-humidity");
		this.dewpoint = document.querySelector(".w-dewpoint");
		this.feels = document.querySelector(".w-feels-like");
		this.wind = document.querySelector(".w-wind");
	}
	// show on the DOM Specific country weather information
	showOnDom(data) {
		this.location.textContent = data.name;
		this.description.textContent = data.main.temp_min;
		this.string.textContent = data.weather[0].main;
		this.icon.setAttribute(
			"src",
			`http://openweathermap.org/img/w/${data.weather[0].icon}.png`
		);
		this.humidity.innerHTML = `<span class="badge badge-sm badge-secondary">Relative Humidity</span> ${data.main.humidity}`;
		this.dewpoint.innerHTML = `<span class="badge badge-sm badge-secondary">Pressure</span> ${data.main.pressure}`;
		this.feels.innerHTML = `<span class="badge badge-sm badge-secondary">Feels_like</span> ${data.main.feels_like} `;
		this.wind.innerHTML = `<span class="badge badge-sm badge-secondary">Wind: Speed</span> ${data.wind.speed} <span class="badge badge-sm badge-secondary">Degree</span> ${data.wind.deg}`;

	}
}