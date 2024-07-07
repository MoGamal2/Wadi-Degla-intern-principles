import GUIFactory from "../factory/type";
import { Checkbox ,Button} from "../UI/type";
export class Application {
    private factory: GUIFactory;
    private button: Button;
    private checkbox: Checkbox;
  
    constructor(factory: GUIFactory) {
      this.factory = factory;
    }
  
    public createUI(): void {
      this.button = this.factory.createButton();
      this.checkbox = this.factory.createCheckbox();
    }
  
    public paint(): void {
      this.button.paint();
      this.checkbox.paint();
    }
  }