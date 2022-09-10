//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage)
    {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.availableRoom = true;
    }
    loadPassenger(num){
        if((num + this.passenger) > this.maxPassengers)
        {
            console.log("Cannot load this many passengers")
        }
        else{
            this.passenger += num;
            if(this.passenger = this.maxPassengers) this.availableRoom = false;
        }
    }
    start()
    {
        if(this.fuel > 0){
            console.log("Vehicle has started")
            this.started = true;
        }
        else{
            console.log("Vehicle has no fuel left")
            this.started = false;
        }
    }
    scheduleService(mileage)
    {
        if(mileage > 30000) {
            this.scheduleService = true;
        }
    }
}
