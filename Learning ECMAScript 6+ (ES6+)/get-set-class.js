class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }
    get lenghtInHours () {
        return `${this.calcLength()} hours`;
    }
    calcLength() {
        return this.distance / this.pace;
    }
}

const mtEverest = new Hike(10, 2);

console.log(mtEverest.lenghtInHours);