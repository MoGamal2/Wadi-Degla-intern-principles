import { Application } from "./application";
import GUIFactory from "./factory/type";
import { WindowsFactory } from "./factory";
import { MacFactory } from "./factory";
function main() {
    let app: Application;
    let factory: GUIFactory;
  
    const os = 'Windows'; 
  
    if (os === 'Windows') {
      factory = new WindowsFactory();
    } else {
      factory = new MacFactory();
    }
  
    app = new Application(factory);
    app.createUI();
    app.paint();
  }
  

  main();