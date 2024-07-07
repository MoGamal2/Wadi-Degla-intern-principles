import StockPriceTicker from "../stock-price-updates/index"

export default class StockPriceProducer {
    private stockTicker: StockPriceTicker;
  
    constructor(stockTicker: StockPriceTicker) {
      this.stockTicker = stockTicker;
    }
  
    public changeStockPrice(price: number): void {
      console.log(`StockPriceProducer: Changing stock price to ${price}`);
      this.stockTicker.setStockPrice(price);
    }
  }
  