import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Placeholder3 } from './placeholdersniper.js'


export class Buy3 extends Actor {

    game
    cost = 500

    constructor(game) {
        super({width:Resources.BuySniper.width/2, height:Resources.BuySniper.height})
        this.graphics.use(Resources.BuySniper.toSprite())
        this.pos = new Vector(190,630)
        this.game = game
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(engine) {
        this.on('pointerdown', (event) => {
            const placeholder = new Placeholder3()
            engine.currentScene.add(placeholder)
            this.game.buyTower(this.cost)
        })
    }

    _postupdate() {
        
    }
}