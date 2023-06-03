import '../css/style.css'
import * as ex from 'excalibur'
import { Actor, Engine, Vector, TextAlign, Scene } from "excalibur"
import { WinScreen } from './winscreen'
import { LoseScreen } from './losescreen'

export class Endscreen extends Scene {
    game
    result
    constructor(game,result) {
        super({})
        this.result = result
        this.game = game
    }
    onInitialize(engine) {
        if (this.result) {
            const winscreen = new WinScreen()
            this.add(winscreen)
        }else{
            const losescreen = new LoseScreen()
            this.add(losescreen)
        }
    }
}