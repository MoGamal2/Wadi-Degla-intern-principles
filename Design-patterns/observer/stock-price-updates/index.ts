import  Observer  from "../user/type";
export default class StockPriceTicker {
    private observers: Observer[] = [];
    private stockPrice: number = 0;
  
    public addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    public removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    }
  
    public setStockPrice(price: number): void {
      this.stockPrice = price;
      this.notifyObservers();
    }
  
    private notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update(this.stockPrice);
      }
    }
  }
  