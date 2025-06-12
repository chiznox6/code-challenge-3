function calculateChaiIngredients() {
  const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  const numberOfCups = Number(input);

  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
    return;
  }

  const water = numberOfCups * 200;
  const milk = numberOfCups * 50;
  const teaLeaves = numberOfCups * 1;
  const sugar = numberOfCups * 2;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${teaLeaves} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`);
}
