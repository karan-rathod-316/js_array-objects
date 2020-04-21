var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function() {
        console.log("QUACK!!!");
    }
};

var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function() {
        console.log("Estoy encantado de conocerle.");
    }
};

var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function() {
        console.log("Hi there!");
    }
};

let penguins = [gunter, ramon, fred]; //1

console.log(penguins[0]); //2

var secondPenguin = penguins[1]; //3

console.log(fred.name); //4

penguins.push = "myPenguin" //5

console.log(penguins.length) //6

penguins[0].canFly = true; //7

penguins[0].sayHello(); //8

for (let i = 0; i < penguins.length; i++) {
    console.log(penguins[i].name);
} // 9

for (let i = 0; i < penguins.length; i++) {
    console.log(penguins[i].sayHello());
} //10

for (let i = 0; i < penguins.length; i++) {
    penguins[i].numberOfFeet = 2;
} //11

for (let i = 0; i < penguins.length; i++) {
    if (penguins[i].canFly) {
        console.log(penguins[i].name + "can fly")
    }
} //12