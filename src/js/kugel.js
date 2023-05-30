import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"

export class Bullet extends Actor {

    pidgeon
    damage
    speed

    constructor(tower,bird,damage,speed) {
        super({width:Resources.Bullet.width/10, height:Resources.Bullet.height/20})
        this.pos = new Vector(tower.pos.x,tower.pos.y)
        this.graphics.use(Resources.Bullet.toSprite())
        this.pidgeon = bird
        this.damage = damage
        this.speed = speed
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize() {
        let multiplier
        let dy = this.pos.y - this.pidgeon.pos.y
        let dx = this.pos.x - this.pidgeon.pos.x
        let theta = Math.atan(dy/dx)

        if (this.pidgeon.pos.x>this.pos.x) {
            multiplier = 0
        }else{
            multiplier = Math.PI
        }

        this.actions.rotateTo(theta+(multiplier), 1000, ex.RotationType.ShortestPath)
    }

    _preupdate() {
        if (this.pos.y > 570) {
            this.kill()
        }
    }

    _postupdate() {
        this.vel = new Vector(
            Math.cos(this.rotation) * this.speed,
            Math.sin(this.rotation) * this.speed
        )
    }
}