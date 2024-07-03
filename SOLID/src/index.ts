import { ContactInfo } from './members/ContactInfo';
import { FootballPlayer } from './members/FootballPlayer';
import { SquashPlayer } from './members/SquashPlayer';
import { FootballClub } from './clubs/FootballClub';
import { SquashClub } from './clubs/SquashClub';

const contactInfo1: ContactInfo = { name: "John Doe", phoneNumber: "123-456-7890", address: "123 Main St" };
const contactInfo2: ContactInfo = { name: "Jane Smith", phoneNumber: "987-654-3210", address: "456 Elm St" };

const footballPlayer1 = new FootballPlayer(contactInfo1);
const squashPlayer1 = new SquashPlayer(contactInfo2);

const footballClub = new FootballClub("FC Awesome", "Coach John");
footballClub.addMember(footballPlayer1);

const squashClub = new SquashClub("Squash Stars", "Coach Jane");
squashClub.addMember(squashPlayer1);

footballClub.printMembers();
squashClub.printMembers();
