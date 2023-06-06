import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import {Pidgeon} from "./vogel.js"

export class Blok extends Pidgeon {
    speed = 35
    hp = 18
    vliegduif = false
    image = Resources.Blok.toSprite()
    originalImage = Resources.Blok.toSprite()
}