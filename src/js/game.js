import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { getPosition } from 'excalibur/build/dist/Util/Util'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor({
            width: Resources.Fish.width,
            height: Resources.Fish.height
        })
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)
        this.add(fish)

        
    }
}

new Game()
