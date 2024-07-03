import { ClubMember } from './ClubMember';
import { ContactInfo } from './ContactInfo';
export abstract class Player extends ClubMember {
  constructor(contactInfo: ContactInfo) {
    super(contactInfo);
  }

  abstract getRole(): string;
}
