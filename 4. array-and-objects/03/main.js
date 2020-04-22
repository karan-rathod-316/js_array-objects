let myPenguin = {
    character: "Captain Cook",
    origin: "Mr. Popper's Penguins",
    author: "Richard and Florence Atwater",
    notes: "Children's book about a housepainter who ends up with a flock of penguins."
}

myPenguin.outfit = {
        hat: "baseball cap",
        shirt: "Hawaiian shirt",
        pant: "cargo shorts",
        shoes: "flip-flops"
    } //1

let penguinHatType = myPenguin.outfit.hat;
console.log(myPenguin.outfit.hat) //2

myPenguin.outfit.accessory = "pocket watch" //3

myPenguin.outfit.hat = "top hat" //4

delete myPenguin.outfit.pant; //5

for (let key in myPenguin.outfit) {
    console.log(key + " : " + myPenguin.outfit[key]);
} //6