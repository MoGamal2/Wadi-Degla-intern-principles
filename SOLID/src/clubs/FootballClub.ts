import { Club } from './Club';

export class FootballClub extends Club {
  constructor(name: string, coach: string) {
    super(name, coach);
  }

  footballMatch() {
    console.log("Football matchday!");
    console.log("11v11 match");
  }

  printMembers(): void {
    console.log("Football team is " + this.getMembers().join(', '));
  }
}
