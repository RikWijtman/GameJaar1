import { Actor, Direction, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import { Range } from './range'
import { Pidgeon } from './vogel'
import { AreaChar } from './areaChar'

export class Towerparent extends Actor {

    timer = 0
    myRange
    target = ''
    range = 240
    firingRate = 50
    bulletType = Bullet
    firingSpeed = 700
    damage = 1
    tower = Resources.Tower
    camoDetection = false

    constructor(x, y) {
        super({width:Resources.Tower.width/2, height:Resources.Tower.height/2})
        this.graphics.use(this.tower.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.15, 0.15)
        
    }

    onInitialize(engine) {
        this.graphics.use(this.tower.toSprite())
        this.myRange = new Range(this.pos.x,this.pos.y,this.range) 
        engine.currentScene.add(this.myRange) 
        
        this.on('pointerdown', (event) => {
            if (this.myRange.graphics.opacity == 1) {
                this.myRange.graphics.opacity = 0
            }else{
                this.myRange.graphics.opacity = 1
            }
        })

        const myArea = new AreaChar(this.pos.x,this.pos.y,80,80)
        engine.currentScene.add(myArea)

        this.myRange.on('precollision', (event) => {
            if (event.other instanceof Pidgeon) {
                this.target = event.other

                if (this.timer > this.firingRate && (!event.other.camo || (event.other.camo && this.camoDetection))) {
                    const bullet = new this.bulletType(this, event.other,this.damage,this.firingSpeed,this.camoDetection)
                    engine.currentScene.add(bullet)
        
                    this.timer = 0
                }
            }
        })
    }    

    onPreUpdate(engine) {

        this.timer += 1;
        
        if (this.target != '' && (!this.target.camo || (this.target.camo && this.camoDetection))) {
            let multiplier
            let dy = this.pos.y - this.target.pos.y
            let dx = this.pos.x - this.target.pos.x
            let theta = Math.atan(dy/dx)

            //

            if (this.target.pos.x>this.pos.x) {
                multiplier = 0
            }else{
                multiplier = Math.PI
            }  

            this.actions.rotateTo(theta+(multiplier), 10, ex.RotationType.ShortestPath);
        }
        this.graphics.use(this.tower.toSprite())
    }
}