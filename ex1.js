function voiture(model, marque, année, type, carburant){
    this.model = model;
    this.marque = marque;
    this.année = année;
    this.type = type;
    this.carburant = carburant;
}

function Hyundai(model, marque, année, type, carburant, série, hybride){
    voiture.call(this, model, marque, année, type, carburant);
    this.série = série;
    this.hybride = hybride;
}

Hyundai.prototype = Object.create(Voiture.prototype);
Hyundai.prototype.constructor = Hyundai;


Hyundai.prototype.alarmer = function() {
    console.log("L'alarme de la Hyundai est activée!");
}

function Ford(model, marque, année, type, carburant, options){
    voiture.call(this, model, marque, année, type, carburant);
    this.options = options;
}

Ford.prototype = Object.create(Voiture.prototype);
Ford.prototype.constructor = Ford;

let voiture1 = new voiture("Sierra", "GMC", 2022, "SUV", "Essence");
let voiture2 = new Ford("Fiesta", "Ford", 2020, "Berline", "Diesel", ["GPS", "Airbags"]);
let voiture3 = new voiture("Model S", "Tesla", 2021, "Berline", "Électrique");
let voiture4 = new voiture("Civic", "Honda", 2019, "Berline", "Essence");
let voiture5 = new Hyundai("Elantra", "Hyundai", 2018, "Berline", "Hybride", "Série A", true);

let listeDesVoitures = [voiture1, voiture2, voiture3, voiture4, voiture5];

listeDesVoitures.sort(function(a, b) {
    return a.année - b.année;
});

console.log(listeDesVoitures);
