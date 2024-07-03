"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
class Club {
    constructor(name, coach) {
        this.name = name;
        this.members = [];
        this.coach = coach;
    }
    getName() {
        return this.name;
    }
    getMembers() {
        return this.members.map(member => member.getContactInfo().name);
    }
    getCoach() {
        return this.coach;
    }
    addMember(member) {
        this.members.push(member);
    }
    printMembers() {
        console.log("Club members are " + this.getMembers().join(', '));
    }
}
exports.Club = Club;
