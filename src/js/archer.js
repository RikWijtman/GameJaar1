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
} 