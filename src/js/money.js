import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class Money extends Actor {

    constructor() {
        super({width:Resources.Money.width, height:Resources.Money.height})
        this.graphics.use(Resources.Money.toSprite())
        this.pos = new Vector(550,20)
        this.scale = new Vector(0.07, 0.07)
    }

    onInitialize() {
    }

    onPreUpdate() {
    }
}