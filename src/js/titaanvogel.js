import { Actor, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import {Pidgeon} from "./vogel.js"

export class TitaanVogel extends Pidgeon {
    speed = 25
    hp = 160
    vliegduif = false
    image = Resources.Titaan.toSprite()
    titan = true
} 