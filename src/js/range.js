import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class Range extends Actor {

    constructor(x,y,size) {
        super({width:Resources.Range.width, height:Resources.Range.height})
        this.graphics.use(Resources.Range.toSprite())
        this.pos = new Vector(x,y)
        this.scale = new Vector(size/512, size/512)
        this.graphics.opacity = 0
    }

    onInitialize() {
    }
}