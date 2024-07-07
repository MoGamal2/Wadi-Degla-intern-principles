import CoffeeMaker from "../coffeeMaker/type";
import TeaMaker from "../teaMaker/type";

export default class TeaMakerAdapter implements CoffeeMaker {
    private teaMaker: TeaMaker;
  
    constructor(teaMaker: TeaMaker) {
      this.teaMaker = teaMaker;
    }
  
    public brewCoffee(): void {
      this.teaMaker.brewTea();
    }
  }
  