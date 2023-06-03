import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"


export class Buy3 extends Actor {

    game
    cost = 450

    constructor(game) {
        super({width:Resources.BuySniper.width/2, height:Resources.BuySniper.height})
        this.graphics.use(Resources.BuySniper.toSprite())
        this.pos = new Vector(260,630)
        this.game = game
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(engine) {
        this.on('pointerdown', (event) => this.game.placeholderHandler(this.cost, 3))
    }

    _postupdate() {
        
    }
}