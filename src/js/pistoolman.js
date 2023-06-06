import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import {Towerparent} from "./towerparent.js"

export class Tower extends Towerparent {
    range = 240
    firingRate = 50
    bulletType = Bullet
    firingSpeed = 700
    damage = 1
    tower = Resources.Tower
    sellWorth = 188

    levelUp2() {
        this.upgradeCost = 1200
        this.damage = 2
        this.firingSpeed = 1000
        this.sellWorth = 638

    }

    levelUp3() {
        this.firingRate = 25
        this.sellWorth = 938
    }
} 