import TeaBrewer from "./teaMaker";
import TeaMakerAdapter from "./teaMakerAdapter";
import BasicCoffeeMaker from "./coffeeMaker";
function main() {
    // Create a tea brewer
    const teaBrewer = new TeaBrewer();
  
    // Create a tea maker adapter
    const teaMakerAdapter = new TeaMakerAdapter(teaBrewer);
  
    // Use the tea maker adapter to brew tea (using CoffeeMaker interface)
    teaMakerAdapter.brewCoffee(); // This will actually brew tea
  
    // Create a basic coffee maker
    const basicCoffeeMaker = new BasicCoffeeMaker();
  
    // Use the basic coffee maker to brew coffee
    basicCoffeeMaker.brewCoffee();
  }
  
  // Run the client code
  main();
  