"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballClub = void 0;
const __1 = require("..");
class FootballClub extends __1.Club {
    constructor(name, coach) {
        super(name, coach);
    }
    footballMatch() {
        console.log("Football matchday!");
        console.log("11v11 match");
    }
    printMembers() {
        console.log("Football team is " + this.getMembers().join(', '));
    }
    printClubInfo() {
        console.log("this is football club");
    }
}
exports.FootballClub = FootballClub;
