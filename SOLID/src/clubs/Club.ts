import { IClub } from './IClub';
import { ClubMember } from '../members/ClubMember';

export abstract class Club implements IClub {
  protected name: string;
  protected members: ClubMember[];
  protected coach: string;

  constructor(name: string, coach: string) {
    this.name = name;
    this.members = [];
    this.coach = coach;
  }

  getName(): string {
    return this.name;
  }

  getMembers(): string[] {
    return this.members.map(member => member.getContactInfo().name);
  }

  getCoach(): string {
    return this.coach;
  }

  addMember(member: ClubMember) {
    this.members.push(member);
  }

  printMembers() {
    console.log("Club members are " + this.getMembers().join(', '));
  }
}
