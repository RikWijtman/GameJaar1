import '../css/style.css'
import * as ex from 'excalibur'
import { Actor, Engine, Vector, TextAlign, Scene } from "excalibur"
import { LoseScreen } from './losescreen'

export class Endscreen2 extends Scene {
    constructor() {
        super({})
    }
    onInitialize(engine) {
        const losescreen = new LoseScreen()
        this.add(losescreen)
    }
}