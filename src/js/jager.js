import { Actor, Direction, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import { Range } from './range'
import { Pidgeon } from './vogel'
import { AreaChar } from './areaChar'

export class Jager extends Actor {

    timer = 0
    myRange
    target = ''

    constructor(x, y) {
        super({width:Resources.Jager.width/2, height:Resources.Jager.height/2})
        this.graphics.use(Resources.Jager.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.15, 0.15)
        
    }

    onInitialize(engine) {
        this.myRange = new Range(this.pos.x,this.pos.y,500) 
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

                if (this.timer > 90) {
                    const bullet = new Bullet(this, event.other,2,1000)
                    engine.currentScene.add(bullet)
        
                    this.timer = 0
                }
            }
        })
    }    

    onPreUpdate(engine) {

        this.timer += 1;
        

        if (this.target != '') {
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
    }
}