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
    upgradeTag = 'Stronger gun'
    upgradeCost = 400

    levelUp2() {
        this.upgradeCost = 1200
        this.damage = 2
        this.firingSpeed = 1000
        this.sellWorth = 488
        this.upgradeTag = 'Dual wield'

    }

    levelUp3() {
        this.firingRate = 25
        this.sellWorth = 1388
        this.tower = Resources.Tower2
        this.upgradeTag = ''
    }
} 