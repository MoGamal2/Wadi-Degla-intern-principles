import { ContactInfo } from "../members/type";
import IManager from "./type";
import { Club } from "../clubs";
class ClubManager implements IManager {
  contactInfo: ContactInfo;
  club: Club;

  constructor(contactInfo: ContactInfo,club: Club) {
    this.club = club;
    this.contactInfo = contactInfo;
  }

  getClubInfo(){
     this.club.printClubInfo();
  }
}

export default ClubManager