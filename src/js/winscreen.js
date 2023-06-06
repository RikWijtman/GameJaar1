import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class WinScreen extends Actor {

    constructor() {
        super({width:Resources.WinScreen.width, height:Resources.WinScreen.height})
        this.graphics.use(Resources.WinScreen.toSprite())
        this.pos = new Vector(356,256)
        this.scale = new Vector(400/512, 400/512)
    }

    onInitialize() {
    }
}