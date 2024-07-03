import { ContactInfo } from './ContactInfo';

export interface Member {
  contactInfo: ContactInfo;
  getContactInfo(): ContactInfo;
}
