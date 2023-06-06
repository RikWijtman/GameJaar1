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
    upgradeCost = 650
    sellWorth = 300
    upgradeTag = 'Better aim'

    levelUp2() {
        this.upgradeCost = 2100
        this.bulletPierce = Infinity
        this.damage = 2
        this.upgradeTag = 'Triple shot'

        this.sellWorth = 784
    }

    levelUp3() {
        this.splitfire = true
        this.upgradeTag = ''

        this.sellWorth = 2359
        this.tower = Resources.Archer2
    }
} 