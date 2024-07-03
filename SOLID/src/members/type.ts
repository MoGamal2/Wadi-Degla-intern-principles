

export interface Member {
  contactInfo: ContactInfo;
  getContactInfo(): ContactInfo;
}
export interface ContactInfo {
  name: string;
  phoneNumber: string;
  address: string;
}
