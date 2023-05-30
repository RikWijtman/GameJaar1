import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class Background extends Actor {

    constructor() {
        super({width:Resources.Pidgeon.width, height:Resources.Pidgeon.height})
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(288, 288)
        this.scale = new Vector(0.75,0.75)
    }
} 