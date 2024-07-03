"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquashPlayer = void 0;
const Player_1 = require("./Player");
class SquashPlayer extends Player_1.Player {
    constructor(contactInfo) {
        super(contactInfo);
    }
    getRole() {
        return "Squash Player";
    }
}
exports.SquashPlayer = SquashPlayer;
