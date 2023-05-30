import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class AreaChar extends Actor {

    constructor(x,y,width,height) {
        super({width:Resources.Area.width, height:Resources.Area.height})
        this.graphics.use(Resources.Area.toSprite())
        this.pos = new Vector(x,y)
        this.scale = new Vector(width/512, height/512)
        this.graphics.opacity = 0
    }

    onInitialize() {
    }
}