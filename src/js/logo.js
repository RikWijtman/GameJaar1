import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class Logo extends Actor {

    constructor(x,y,size) {
        super({width:Resources.Logo.width/1.5, height:Resources.Logo.height/1.5})
        this.graphics.use(Resources.Logo.toSprite())
        this.pos = new Vector(256,206)
        this.scale = new Vector(0.4,0.4)
    }

    onInitialize() {
    }
}