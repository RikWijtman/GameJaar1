import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import {Pidgeon} from "./vogel.js"

export class Bosvogel extends Pidgeon {
    speed = 50
    hp = 12
    vliegduif = false
    camo = true
    image = Resources.Bos.toSprite()
    originalImage = Resources.Bos.toSprite()
}