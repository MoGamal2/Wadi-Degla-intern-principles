import {Button, Checkbox} from "../UI/type"

export default interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
  }
  