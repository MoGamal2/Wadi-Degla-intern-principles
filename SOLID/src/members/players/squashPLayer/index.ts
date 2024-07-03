import { Player } from './Player';
import { ContactInfo } from '../types/ContactInfo';
export class SquashPlayer extends Player {
  constructor(contactInfo: ContactInfo) {
    super(contactInfo);
  }

  getRole(): string {
    return "Squash Player";
  }
}
