class Storage{
    constructor() {
        this.city;
        this.defaultCity = 'Pakistan';
    }


    getLocation() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        return { city:this.city }
    }

    setlocation(city) {
        localStorage.setItem('city', city);
    }

}