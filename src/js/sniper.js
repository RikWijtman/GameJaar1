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
    upgradeTag = 'Better scope'

    levelUp2(engine) {
        this.upgradeCost = 1600

        this.range = 1000
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
        this.upgradeTag = 'Titan destroyer'

        this.sellWorth = 634
    }

    levelUp3() {
        this.damage = 4
        this.titanBoost = true
        this.upgradeTag = ''

        this.sellWorth = 1834
        this.tower = Resources.Sniper2
    }
} 