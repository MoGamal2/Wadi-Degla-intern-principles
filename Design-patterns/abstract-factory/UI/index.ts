import {Button,Checkbox } from "./type";
export  class WindowsButton implements Button {
    public paint(): void {
      console.log('Render a button in a Windows style');
    }
  }
  
  export class MacButton implements Button {
    public paint(): void {
      console.log('Render a button in a Mac style');
    }
  }
  
  export class WindowsCheckbox implements Checkbox {
    public paint(): void {
      console.log('Render a checkbox in a Windows style');
    }
  }
  
  export class MacCheckbox implements Checkbox {
    public paint(): void {
      console.log('Render a checkbox in a Mac style');
    }
  }
  