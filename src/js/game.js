import { Battlefield } from "./battlefield"
import { Startscreen } from "./startscreen"
import { Actor, Engine, Vector, TextAlign, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Endscreen } from "./endscreen"

export class Game extends Engine {
    constructor() {
        super({ width: 576, height: 676 }) 
        this.start(ResourceLoader).then(() => this.startGame())
    }
    startGame() {  
        this.addScene('battlefield', new Battlefield())  
        this.addScene('startscreen', new Startscreen())  
        this.addScene('endscreen', new Endscreen())  
        this.goToScene('startscreen', this)
    }
}

new Game()

/*
todo:
targetten fixen
upgrades

verbeteren buy art

muziek?

meer maps
meer towers
meer enemies
gamemodes
*/