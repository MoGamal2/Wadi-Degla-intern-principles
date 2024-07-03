import { Member } from './Member';
import { ContactInfo } from './ContactInfo';

export abstract class ClubMember implements Member {
  contactInfo: ContactInfo;

  constructor(contactInfo: ContactInfo) {
    this.contactInfo = contactInfo;
  }

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }
}
