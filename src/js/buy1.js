import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Placeholder } from './placeholderpistoolman.js'


export class Buy1 extends Actor {

    game
    cost = 200

    constructor(game) {
        super({width:Resources.BuyPistoolman.width/2, height:Resources.BuyPistoolman.height})
        this.graphics.use(Resources.BuyPistoolman.toSprite())
        this.pos = new Vector(50,630)
        this.game = game
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(engine) {
        this.on('pointerdown', (event) => {
            const placeholder = new Placeholder(this.game, this.cost)
            engine.currentScene.add(placeholder)
            this.game.buyTower(this.cost)
        })
    }

    _preupdate() {
    }
}