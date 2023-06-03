import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class WinScreen extends Actor {

    constructor() {
        super({width:Resources.WinScreen.width, height:Resources.WinScreen.height})
        this.graphics.use(Resources.WinScreen.toSprite())
        this.pos = new Vector(250,250)
        this.scale = new Vector(200/512, 200/512)
    }

    onInitialize() {
    }
}