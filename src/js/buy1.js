import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"


export class Buy1 extends Actor {

    game
    cost = 250

    constructor(game) {
        super({width:Resources.BuyPistoolman.width/2, height:Resources.BuyPistoolman.height})
        this.graphics.use(Resources.BuyPistoolman.toSprite())
        this.pos = new Vector(50,630)
        this.game = game
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(engine) {
        this.on('pointerdown', (event) => this.game.placeholderHandler(this.cost, 1))
    }

    _preupdate() {
    }
}