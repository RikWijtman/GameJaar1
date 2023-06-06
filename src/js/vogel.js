import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'

export class Pidgeon extends Actor {

    hp = 5
    maxHp
    speed = 50
    timer
    spawnTimer = 0
    game
    camo = false
    vliegduif = false
    image = Resources.Pidgeon.toSprite()
    originalImage = Resources.Pidgeon.toSprite()
    titan = false
    far = 0

    constructor(game) {
        super({width:Resources.Pidgeon.width/1.6, height:Resources.Pidgeon.height/3})
        this.game = game
    }

    onInitialize(engine) {
        this.maxHp = this.hp
        this.graphics.use(this.image)
        this.pos = new Vector(120, 0)
        this.scale = new Vector(0.15, 0.15)
        this.rotation = 1.5

        this.actions.moveTo(ex.vec(120, 335), this.speed)
        .rotateBy(Math.PI *1.5, 100, ex.RotationType.ShortestPath)
        .moveTo(ex.vec(265, 335), this.speed)
        .rotateBy(Math.PI *1.5, 100, ex.RotationType.ShortestPath)
        .moveTo(ex.vec(265, 220), this.speed)
        .rotateBy(Math.PI *-1.5, 100, ex.RotationType.ShortestPath)
        .moveTo(ex.vec(450, 220), this.speed)
        .rotateBy(Math.PI *-1.5, 100, ex.RotationType.ShortestPath)
        .moveTo(ex.vec(450, 1000), this.speed);

        this.on('collisionstart', (event) => {
        if (event.other instanceof Bullet) {
            if (this.camo && !event.other.camo) {
                return
            }
            if (this.titan) {
                this.hp -= event.other.titanDamage
                this.game.gainCash(event.other.titanDamage)
            }else{
                this.hp -= event.other.damage
                this.game.gainCash(event.other.damage)
            }
            this.Flash()
            event.other.bulletHp--
        }})
    }

    onPreUpdate(){
        if (this.vliegduif && this.hp <= this.maxHp/2) {
            this.image = this.originalImage
            this.graphics.use(this.image)
        }
        if (this.hp <= 0) {
            this.kill()
        }
        this.spawnTimer+=this.speed
    }

    onPostUpdate(){
        this.far += this.speed
        if (this.pos.y > 550) {
            this.game.takeDamage(this.hp)
            this.hp = 0
        }

        //

        if (this.timer > 2) {
            this.graphics.opacity = 1
        }else{
            this.timer += 1
        }
    }

    Flash() {
        console.log('hit');
        this.timer = 0
        this.graphics.opacity = 0.8
    }
} 