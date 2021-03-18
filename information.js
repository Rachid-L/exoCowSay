let cowsay = require("cowsay");

const me = {
  name: "Rachid",
  campus: "Lyon",
};

console.log(
  cowsay.say({
    text: `Hi my name is ${me.name} and i'm from ${me.campus}`,
    e: "oO",
    T: "U ",
  })
);
