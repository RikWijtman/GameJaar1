import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import {Towerparent} from "./towerparent.js"
import { Range } from './range'
import { Pidgeon } from './vogel'
import { Hawk } from './hawk'

export class Jager extends Towerparent {
    range = 350
    firingRate = 90
    bulletType = Bullet
    firingSpeed = 800
    damage = 2
    tower = Resources.Jager
    camoDetection = false
    name = 'Hunter'
    upgradeCost = 550
    sellWorth = 263
    abilityButton

    levelUp2(engine) {
        this.upgradeCost = 2600
        this.camoDetection = true

        this.range = 450
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

        this.sellWorth = 676
    }

    levelUp3(engine) {
        this.damage = 3
        this.hawkAttack = true

        this.range = 450
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

                if (this.hawkTimer > this.hawkFiringRate && (!event.other.camo || (event.other.camo && this.camoDetection))) {
                    const hawk = new Hawk(this, event.other,3,300,true,Infinity,0)
                    engine.currentScene.add(hawk)
        
                    this.hawkTimer = 0
                }
            }
        })

        this.sellWorth = 1300
    }
} 