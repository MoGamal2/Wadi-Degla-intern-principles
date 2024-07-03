import { Member } from './type';
import { ContactInfo } from './type';

export abstract class ClubMember implements Member {
  contactInfo: ContactInfo;

  constructor(contactInfo: ContactInfo) {
    this.contactInfo = contactInfo;
  }

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }
}
