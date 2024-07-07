import { Inventory,PaymentGateway,ShippingService } from "../subsystems";
export default class OnlineShoppingFacade {
    private inventory: Inventory;
    private paymentGateway: PaymentGateway;
    private shippingService: ShippingService;
  
    constructor() {
      this.inventory = new Inventory();
      this.paymentGateway = new PaymentGateway();
      this.shippingService = new ShippingService();
    }
  
    public placeOrder(productId: string, quantity: number, amount: number): void {
      const isAvailable = this.inventory.checkInventory(productId, quantity);
  
      if (isAvailable) {
        const isPaymentSuccessful = this.paymentGateway.processPayment(amount);
  
        if (isPaymentSuccessful) {
          this.shippingService.shipOrder(productId, quantity);
          console.log(`Order placed successfully for ${quantity} of product ${productId}`);
        } else {
          console.log('Payment processing failed. Order could not be placed.');
        }
      } else {
        console.log(`Insufficient inventory for product ${productId}`);
      }
    }
  }
  