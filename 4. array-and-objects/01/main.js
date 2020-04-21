let myPenguin = {
    character: "Captain Cook",
    origin: "Mr. Popper's Penguins",
    author: "Richard and Florence Atwater",
    notes: "Children's book about a housepainter who ends up with a flock of penguins."
}

myPenguin.favoriteFoods = ["human-meat", "insects", "dinosaurs"] //1

console.log(myPenguin.favouriteFoods[1]); //2

var firstFavFood = myPenguin.favoriteFoods[0]; //3

myPenguin.favoriteFoods.push = "chole bhature"; //4

console.log(myPenguin.favoriteFoods.length); //5

myPenguin.favoriteFoods[length - 1] = "pineapples"; //6

var lastFavFood = myPenguin.favoriteFoods[length - 1]; //7

for (let i = 0; i < myPenguin.favoriteFoods.length; i++) {
    console.log(myPenguin.favoriteFoods[i]);
} //8