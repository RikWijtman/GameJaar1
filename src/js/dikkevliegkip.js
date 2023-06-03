import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import {Pidgeon} from "./vogel.js"

export class BlokVlieg extends Pidgeon {
    speed = 50
    hp = 25
    vliegduif = true
    image = Resources.BlokVlieg.toSprite()
    originalImage = Resources.Blok.toSprite()
}