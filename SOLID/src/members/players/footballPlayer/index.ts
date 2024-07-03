import { Player } from "../Player";
import { ContactInfo } from "../../type";
export class FootballPlayer extends Player {
  constructor(contactInfo: ContactInfo) {
    super(contactInfo);
  }

  getRole(): string {
    return "Football Player";
  }
}
