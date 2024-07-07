import User from "../user";
import ChatMediator from "./type";
export default class ChatRoom implements ChatMediator {
    private users: User[] = [];
  
    public addUser(user: User): void {
      this.users.push(user);
    }
  
    public sendMessage(message: string, sender: User): void {
      for (const user of this.users) {
        // Send the message to all users except the sender
        if (user !== sender) {
          user.receiveMessage(message);
        }
      }
    }
  }
  