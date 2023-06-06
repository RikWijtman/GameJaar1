import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import {Towerparent} from "./towerparent.js"

export class Archer extends Towerparent {
    range = 340
    firingRate = 75
    bulletType = Bullet
    firingSpeed = 800
    damage = 1
    tower = Resources.Archer
    bulletPierce = 3
    name = 'Archer'
    upgradeCost = 1400
    sellWorth = 300

    levelUp2() {
        this.upgradeCost = 2600
        this.bulletPierce = Infinity
        this.damage = 2

        this.sellWorth = 650
    }

    levelUp3() {
        this.splitfire = true

        this.sellWorth = 1300
    }
} 