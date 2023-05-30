import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Placeholder2 } from './placeholderjager.js'


export class Buy2 extends Actor {

    game
    cost = 400

    constructor(game) {
        super({width:Resources.BuyPistoolman.width/2, height:Resources.BuyPistoolman.height})
        this.graphics.use(Resources.BuyJager.toSprite())
        this.pos = new Vector(120,630)
        this.game = game
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(engine) {
        this.on('pointerdown', (event) => {
            const placeholder = new Placeholder2()
            engine.currentScene.add(placeholder)
            this.game.buyTower(this.cost)
        })
    }

    _postupdate() {
        
    }
}