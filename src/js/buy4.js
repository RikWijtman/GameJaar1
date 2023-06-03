import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"


export class Buy4 extends Actor {

    game
    cost = 400

    constructor(game) {
        super({width:Resources.BuyArcher.width/2, height:Resources.BuyArcher.height})
        this.graphics.use(Resources.BuyArcher.toSprite())
        this.pos = new Vector(190,630)
        this.game = game
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(engine) {
        this.on('pointerdown', (event) => this.game.placeholderHandler(this.cost, 4))
    }

    _postupdate() {
        
    }
}