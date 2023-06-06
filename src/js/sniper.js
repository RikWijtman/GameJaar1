import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import { Range } from './range'
import { Pidgeon } from './vogel'
import {Towerparent} from "./towerparent.js"

export class Sniper extends Towerparent {
    range = 500
    firingRate = 140
    bulletType = Bullet
    firingSpeed = 1000
    damage = 3
    tower = Resources.Sniper
    camoDetection = true
    name = 'Sniper'
    sellWorth = 188
    upgradeCost = 400
    myRange

    levelUp2(engine) {
        this.upgradeCost = 1800

        this.range = 800
        this.myRange.kill()
        this.myRange = new Range(this.pos.x,this.pos.y,this.range) 
        engine.currentScene.add(this.myRange) 
        this.myRange.on('precollision', (event) => {
            if (event.other instanceof Pidgeon) {
                this.target = event.other

                if (this.timer > this.firingRate && (!event.other.camo || (event.other.camo && this.camoDetection))) {
                    const bullet = new this.bulletType(this, event.other,this.damage,this.firingSpeed,this.camoDetection,this.bulletPierce,0)
                    engine.currentScene.add(bullet)
        
                    this.timer = 0
                }

                
            }
        })

        this.sellWorth = 938
    }

    levelUp3() {
        this.damage = 4
        this.titanBoost = true

        this.sellWorth = 1388
    }
} 