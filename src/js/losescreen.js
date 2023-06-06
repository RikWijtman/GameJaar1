import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class LoseScreen extends Actor {

    constructor() {
        super({width:Resources.LoseScreen.width, height:Resources.LoseScreen.height})
        this.graphics.use(Resources.LoseScreen.toSprite())
        this.pos = new Vector(356,256)
        this.scale = new Vector(400/512, 400/512)
    }

    onInitialize() {
    }
}