import { Actor, Direction, Vector, Input } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Tower } from './pistoolman.js'
import { Area } from './areaDenied.js'
import { AreaChar } from './areaChar.js'

export class Placeholder extends Actor {

    touchGrass = false
    game
    cost

    constructor(game,cost) {
        super({width:Resources.Tower.width/4, height:Resources.Tower.height/4})
        this.graphics.use(Resources.PistoolmanA.toSprite())
        this.pos = new Vector(0, 0)
        this.scale = new Vector(0.15, 0.15)
        this.game = game
        this.cost = cost
    }

    onInitialize(engine) {
        this.on('collisionend', (event) => {
            if (event.other instanceof Area||event.other instanceof AreaChar) {
                this.touchGrass = false
            }
        })

        this.on('precollision', (event) => {
            if (event.other instanceof Area||event.other instanceof AreaChar) {
                this.touchGrass = true
                
                this.graphics.use(Resources.Tower.toSprite())
            }
        })

        this.on('pointerdown', (event) => {
            if (!this.touchGrass) {
                this.kill()
                const tower = new Tower(this.pos.x, this.pos.y, this.game)
                engine.currentScene.add(tower)
                this.game.cancelplacing()
            }
        })

    }

    onPreUpdate(engine) {        
        this.pos = engine.input.pointers.primary.lastScreenPos
        this.graphics.use(Resources.PistoolmanA.toSprite())

        
        if (engine.input.keyboard.isHeld(Input.Keys.X)) {
            this.kill()
            this.game.deleteTower(this.cost)
            this.game.cancelplacing()
        }
    }
}