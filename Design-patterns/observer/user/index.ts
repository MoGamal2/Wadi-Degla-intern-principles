import  Observer  from "./type";
export class MobileApp implements Observer {
    public update(stockPrice: number): void {
      console.log(`MobileApp: Stock price updated to ${stockPrice}`);
    }
  }
  
  export class WebApp implements Observer {
    public update(stockPrice: number): void {
      console.log(`WebApp: Stock price updated to ${stockPrice}`);
    }
  }
  
  export class DesktopApp implements Observer {
    public update(stockPrice: number): void {
      console.log(`DesktopApp: Stock price updated to ${stockPrice}`);
    }
  }
  