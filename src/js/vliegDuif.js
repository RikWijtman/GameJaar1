import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import {Pidgeon} from "./vogel.js"

export class PidgeonVlieg extends Pidgeon {
    speed = 80
    hp = 8
    vliegduif = true
    image = Resources.PidgeonVlieg.toSprite()
} 