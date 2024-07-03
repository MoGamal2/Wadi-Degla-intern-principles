import { Player } from './Player';
import { ContactInfo } from './ContactInfo';
export class SquashPlayer extends Player {
  constructor(contactInfo: ContactInfo) {
    super(contactInfo);
  }

  getRole(): string {
    return "Squash Player";
  }
}
