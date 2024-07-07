// Subsystem: Inventory Management
export class Inventory {
    public checkInventory(productId: string, quantity: number): boolean {
      console.log(`Checking inventory for product ${productId}`);
      // Simulate inventory check logic
      return quantity <= 10; // Example: Assume 10 items available
    }
  }
  
  // Subsystem: Payment Processing
 export class PaymentGateway {
    public processPayment(amount: number): boolean {
      console.log(`Processing payment of ${amount}`);
      // Simulate payment processing logic
      return true; // Payment successful
    }
  }
  
  // Subsystem: Shipping Service
 export class ShippingService {
    public shipOrder(productId: string, quantity: number): void {
      console.log(`Shipping order for product ${productId}`);
      // Simulate shipping logic
      console.log(`Shipped ${quantity} items of product ${productId}`);
    }
  }
  