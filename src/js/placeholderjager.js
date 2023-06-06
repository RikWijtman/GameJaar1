import { Actor, Direction, Vector, Input } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Jager } from './jager.js'
import { Area } from './areaDenied.js'
import { AreaChar } from './areaChar.js'

export class Placeholder2 extends Actor {

    touchGrass = false
    game
    cost

    constructor(game, cost) {
        super({width:Resources.Jager.width/4, height:Resources.Jager.height/4})
        this.graphics.use(Resources.Jager.toSprite())
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
                
                this.graphics.use(Resources.Jager.toSprite())
            }
        })

        this.on('pointerdown', (event) => {
            if (!this.touchGrass) {
                this.kill()
                const tower = new Jager(this.pos.x, this.pos.y, this.game)
                engine.currentScene.add(tower)

                this.game.cancelplacing()
            }
        })

    }

    onPreUpdate(engine) {        
        this.pos = engine.input.pointers.primary.lastScreenPos

        this.graphics.use(Resources.JagerA.toSprite())

        if (engine.input.keyboard.isHeld(Input.Keys.X)) {
            this.kill()
            this.game.deleteTower(this.cost)
            this.game.cancelplacing()
        }
    }
}