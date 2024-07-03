"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquashClub = void 0;
const __1 = require("..");
class SquashClub extends __1.Club {
    constructor(name, coach) {
        super(name, coach);
    }
    squashMatch() {
        console.log("Squash match!");
        console.log("1v1 match");
    }
    printMembers() {
        console.log("Squash players are " + this.getMembers().join(', '));
    }
    printClubInfo() {
        console.log("this is squash club");
    }
}
exports.SquashClub = SquashClub;
