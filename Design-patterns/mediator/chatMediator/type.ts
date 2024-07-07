import User from "../user";

export default interface ChatMediator {
sendMessage(message: string, user: User): void;
  }
