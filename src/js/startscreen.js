import '../css/style.css'
import * as ex from 'excalibur'
import { Actor, Engine, Vector, TextAlign, Scene } from "excalibur"
import { Startbutton } from './startbutton'

export class Startscreen extends Scene {

    constructor() {
        super({})
    }
    onInitialize(engine) {
        const button = new Startbutton()
        button.on('pointerdown', (event) => {
            engine.goToScene('battlefield')
        })
        this.add(button)
    }
}