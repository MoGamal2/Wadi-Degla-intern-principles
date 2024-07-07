function main() {
    const stockTicker = new StockPriceTicker();
  
    const mobileApp = new MobileApp();
    const webApp = new WebApp();
    const desktopApp = new DesktopApp();
  
    stockTicker.addObserver(mobileApp);
    stockTicker.addObserver(webApp);
    stockTicker.addObserver(desktopApp);
  
    const producer = new StockPriceProducer(stockTicker);
  
    // Simulate stock price updates
    producer.changeStockPrice(100);
    producer.changeStockPrice(200);
    producer.changeStockPrice(300);
  
    // Remove an observer and simulate another update
    stockTicker.removeObserver(webApp);
    producer.changeStockPrice(400);
  }
  
  // Run the client code
  main();
  