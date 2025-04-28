function streetGreeting() {
    console.log("*head node*");
  }
  streetGreeting();
  
  function friendGreeting(friend) {
    console.log("Hey " + friend + "!");
  }
  
  friendGreeting("Jini");
  friendGreeting("Lemon");
  
  function awkwardGreeting(yourName, friendName) {
    console.log(`Hey ${friendName}, It's me, ${yourName}`);
  }
  awkwardGreeting("Maia", "Taylor");
  