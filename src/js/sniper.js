import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import {Towerparent} from "./towerparent.js"

export class Sniper extends Towerparent {
    range = 500
    firingRate = 140
    bulletType = Bullet
    firingSpeed = 1000
    damage = 3
    tower = Resources.Sniper
    camoDetection = true
} 