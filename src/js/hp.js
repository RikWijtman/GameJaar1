import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class Hp extends Actor {

    constructor() {
        super({width:Resources.Hp.width, height:Resources.Hp.height})
        this.graphics.use(Resources.Hp.toSprite())
        this.pos = new Vector(550,50)
        this.scale = new Vector(0.07, 0.07)
    }

    onInitialize() {
    }

    onPreUpdate() {
    }
}