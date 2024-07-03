// Club interface
interface IClub {
  getName(): string;
  getMembers(): string[];
  getCoach(): string;
}

// Base class for clubs
abstract class Club implements IClub {
  protected name: string;
  protected members: string[];
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
    return this.members;
  }
  getCoach(): string {
    return this.coach;
  }
  printMembers() {
    console.log("Club members are " + this.members);
  }
}

// Football club class
class FootballClub extends Club {
  constructor(name: string, coach: string) {
    super(name, coach);
  }
  footballMatch() {
    console.log(`football matchday!`);
    console.log("11v11 match");
  }
  printMembers(): void {
    console.log("Football team is" + this.members);
  }
}

// Chess club class
class SquashClub extends Club {
  constructor(name: string, coach: string) {
    super(name, coach);
  }
  squashMatch() {
    console.log("Squash match!");
    console.log("1v1 match");
  }
  printMembers(): void {
    console.log("Squash players " + this.members);
  }
}
