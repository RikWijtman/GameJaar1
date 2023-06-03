import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import {Pidgeon} from "./vogel.js"

export class Bosvogelvlieg extends Pidgeon {
    speed = 80
    hp = 15
    vliegduif = true
    camo = true
    image = Resources.BosVlieg.toSprite()
    originalImage = Resources.Bos.toSprite()
}