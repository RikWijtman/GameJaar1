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
} 