import { Battlefield } from "./battlefield"
import { Startscreen } from "./startscreen"
import { Actor, Engine, Vector, TextAlign, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Endscreen1 } from "./endscreen"
import { Endscreen2 } from "./endscreen2"

export class Game extends Engine {
    startscherm
    Battlefield
    endschermWin
    endschermLose
    constructor() {
        super({ width: 776, height: 676 }) 
        this.start(ResourceLoader).then(() => this.startGame())
        //this.showDebug(true)
        //this.debug.transform.showAll = true
    }
    startGame() {  
        this.startscherm = new Startscreen()
        this.battlefield = new Battlefield(this)
        this.endschermWin = new Endscreen1()
        this.endschermLose = new Endscreen2()

        this.addScene('battlefield', this.battlefield)  
        this.addScene('startscreen', this.startscherm)  
        this.addScene('endscreenwin', this.endschermWin) 
        this.addScene('endscreenlose', this.endschermLose) 

        this.goToScene('startscreen')
    }
}

new Game()