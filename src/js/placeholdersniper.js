import { Actor, Direction, Vector, Input } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Sniper } from './sniper.js'
import { AreaHigh } from './areaHigh.js'
import { AreaChar } from './areaChar.js'

export class Placeholder3 extends Actor {

    touchGrass = false
    game
    cost
    isTouchingHighground

    constructor(game, cost) {
        super({width:Resources.Sniper.width/4, height:Resources.Sniper.height/4})
        this.graphics.use(Resources.Sniper.toSprite())
        this.pos = new Vector(0, 0)
        this.scale = new Vector(0.15, 0.15)
        this.game = game
        this.cost = cost
    }

    onInitialize(engine) {
        this.on('collisionend', (event) => {
            if (event.other instanceof AreaHigh) {
                this.touchGrass = true
                
                this.graphics.use(Resources.Sniper.toSprite())
            }

            if (event.other instanceof AreaChar) {
                this.touchGrass = false

                this.graphics.use(Resources.SniperA.toSprite())
            }
        })

        this.on('precollision', (event) => {
            if (event.other instanceof AreaHigh) {
                this.isTouchingHighground = true
                this.touchGrass = false

                this.graphics.use(Resources.SniperA.toSprite())
            }

            if (event.other instanceof AreaChar) {
                this.touchGrass = true
                this.isTouchingHighground = false
                
                this.graphics.use(Resources.Sniper.toSprite())
            }
        })

        this.on('pointerdown', (event) => {
            if (!this.touchGrass) {
                this.kill()
                const tower = new Sniper(this.pos.x, this.pos.y)
                engine.currentScene.add(tower)

                this.game.cancelplacing()
            }
        })

    }

    onPreUpdate(engine) {        
        this.pos = engine.input.pointers.primary.lastScreenPos

        if (!this.isTouchingHighground) {
            this.touchGrass = true
            
            this.graphics.use(Resources.Sniper.toSprite())

        }

        if (engine.input.keyboard.isHeld(Input.Keys.X)) {
            this.kill()
            this.game.deleteTower(this.cost)
            this.game.cancelplacing()
        }
    }
}