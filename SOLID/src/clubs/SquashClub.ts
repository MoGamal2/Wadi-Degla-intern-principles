import { Club } from './Club';

export class SquashClub extends Club {
  constructor(name: string, coach: string) {
    super(name, coach);
  }

  squashMatch() {
    console.log("Squash match!");
    console.log("1v1 match");
  }

  printMembers(): void {
    console.log("Squash players are " + this.getMembers().join(', '));
  }
}
