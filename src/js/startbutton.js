import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class Startbutton extends Actor {

    constructor(x,y,size) {
        super({width:Resources.Range.width, height:Resources.Range.height})
        this.graphics.use(Resources.Range.toSprite())
        this.pos = new Vector(250,250)
        this.scale = new Vector(0.5,0.5)
    }

    onInitialize() {
    }
}