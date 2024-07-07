import GUIFactory from "./type";
import {Checkbox,Button} from "../UI/type"
import {WindowsButton,WindowsCheckbox} from "../UI/index"
import { MacCheckbox,MacButton } from "../UI/index";

export class WindowsFactory implements GUIFactory {
    public createButton(): Button {
      return new WindowsButton();
    }
  
    public createCheckbox(): Checkbox {
      return new WindowsCheckbox();
    }
  }
  
 export class MacFactory implements GUIFactory {
    public createButton(): Button {
      return new MacButton();
    }
  
    public createCheckbox(): Checkbox {
      return new MacCheckbox();
    }
  }
  