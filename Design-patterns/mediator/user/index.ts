import ChatMediator from "../chatMediator/type";

export default class User {
    private name: string;
    private mediator: ChatMediator;
  
    constructor(name: string, mediator: ChatMediator) {
      this.name = name;
      this.mediator = mediator;
    }
  
    public send(message: string): void {
      console.log(`${this.name} sends: ${message}`);
      this.mediator.sendMessage(message, this);
    }
  
    public receiveMessage(message: string): void {
      console.log(`${this.name} receives: ${message}`);
    }
  }
  