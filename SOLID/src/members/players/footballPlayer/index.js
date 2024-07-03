"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballPlayer = void 0;
const Player_1 = require("./Player");
class FootballPlayer extends Player_1.Player {
    constructor(contactInfo) {
        super(contactInfo);
    }
    getRole() {
        return "Football Player";
    }
}
exports.FootballPlayer = FootballPlayer;
