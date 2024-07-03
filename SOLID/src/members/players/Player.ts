import { ClubMember } from '..';
import { ContactInfo } from '../type';
export abstract class Player extends ClubMember {
  constructor(contactInfo: ContactInfo) {
    super(contactInfo);
  }

  abstract getRole(): string;
}
