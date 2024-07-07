import OnlineShoppingFacade from "./interface";
function main() {
    const shoppingFacade = new OnlineShoppingFacade();
  
    // Client code interacts with the facade
    shoppingFacade.placeOrder('ABC123', 5, 1000);
  }
  