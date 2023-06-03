import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import {Towerparent} from "./towerparent.js"

export class Jager extends Towerparent {
    range = 350
    firingRate = 90
    bulletType = Bullet
    firingSpeed = 800
    damage = 2
    tower = Resources.Jager
    camoDetection = true
} 