// Constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.displayProperties = function() {
        console.log("Make: " + this.make + ", " + "Model: " + this.model + ", " + " Year: " + this.year);
        alert("Make: " + this.make + ", " + " Model: " + this.model + ", " + " Year: " + this.year);
    };
}

// creating objects
var audiA8 = new Car('Volswagen', 'AudiA8', '1994');
var audiQ7 = new Car('Audi AG', 'AudiQ7', '2005');

// calling property
console.log("Object1");
audiA8.displayProperties();
console.log("Object2");
audiQ7.displayProperties();