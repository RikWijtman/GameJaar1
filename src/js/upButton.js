import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class upButton extends Actor {

    constructor(x,y) {
        super({width:Resources.Range.width, height:Resources.Range.height})
        this.graphics.use(Resources.Range.toSprite())
        this.pos = new Vector(x,y)
        this.scale = new Vector(50/512, 50/512)
    }

    onInitialize() {
    }
}