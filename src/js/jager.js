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
    upgradeCost = 420
    sellWorth = 263
    abilityButton
    upgradeTag = 'Keen eye'

    levelUp2(engine) {
        this.upgradeCost = 1400
        this.camoDetection = true

        this.range = 450
        this.myRange.kill()
        this.myRange = new Range(this.pos.x,this.pos.y,this.range) 
        engine.currentScene.add(this.myRange) 
        this.myRange.on('precollision', (event) => {
            if (event.other instanceof Pidgeon) {
                if (this.target == 'T') {
                    this.target = event.other
                }
                if (event.other.far > this.target.far) {
                    this.target = event.other
                }
            }
        })

        this.upgradeTag = 'Little budy'

        this.sellWorth = 578
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
                if (this.target == 'T') {
                    this.target = event.other
                }
                if (event.other.far > this.target.far) {
                    this.target = event.other
                }
            }
        })
        this.upgradeTag = ''

        this.sellWorth = 1628
        this.tower = Resources.Jager2
    }
} 