import { ContactInfo } from "../members/type";
import IManager from "./type";
import { Club } from "../clubs";
class ClubManager implements IManager {
  contactInfo: ContactInfo;

  constructor(contactInfo: ContactInfo) {
    this.contactInfo = contactInfo;
  }

  getClubInfo(club: Club){
     club.printClubInfo
  }
}

export default ClubManager