// write your code here
const gandalf = {
    name: "Gandalf",
    age: 11000,
    aliases: ["Greyhame", "Stormcrow", "Mithrandir"],
    shallPass: function () {
      console.log(
        "I am a servant of the Secret Fire, wielder of the flame of Anor. You cannot pass! The dark fire will not avail you, flame of Udûn. Go back to the Shadow! You shall NOT pass!!!"
      );
    },
  };
  
  // Object properties can be accessed with "dot"
  console.log(
    `My name is ${gandalf.name} the wizard and I am ${gandalf.age} years young!`
  );
  
  // You can access arrays and their properties from an object
  console.log(`I have more than ${gandalf.aliases.length} aliases`);
  
  // Add a property to the existing object
  gandalf.ring = "Narya";
  console.log(`My ring's name is ${gandalf.ring}`);
  
  // Run Gandalf's shallPass method aka: a function of the object
  gandalf.shallPass();
  
  // Object properties can be accessed with bracket notation
  
  let ageProperty = "age";
  // console.log(`Some call me old, but I am ${gandalf.ageProperty} years young!`);
  // Dot notation won't work because ageProperty is not a key in our object!
  // To use a variable to access a property, we need to use bracket notation:
  console.log(`Some call me old, but I am only ${gandalf[ageProperty]}!`);
  