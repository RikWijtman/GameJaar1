import '../css/style.css'
import * as ex from 'excalibur'
import { Actor, Engine, Vector, TextAlign, Scene } from "excalibur"
import { WinScreen } from './winscreen'

export class Endscreen1 extends Scene {
    constructor() {
        super({})
    }
    onInitialize(engine) {
        const winscreen = new WinScreen()
        this.add(winscreen)
    }
}