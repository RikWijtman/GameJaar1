import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class delButton extends Actor {

    constructor(x,y) {
        super({width:Resources.Area.width, height:Resources.Area.height})
        this.graphics.use(Resources.Area.toSprite())
        this.pos = new Vector(x,y)
        this.scale = new Vector(50/512, 50/512)
    }

    onInitialize() {
    }
}