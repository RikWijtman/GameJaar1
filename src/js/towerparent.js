import { Actor, Direction, Vector } from "excalibur"
import * as ex from 'excalibur'
import {Resources} from "./resources.js"
import { Bullet } from './kugel'
import { Hawk } from './hawk'
import { Range } from './range'
import { Pidgeon } from './vogel'
import { AreaChar } from './areaChar'

export class Towerparent extends Actor {

    timer = 0
    myRange
    target = ''
    range = 240
    firingRate = 50
    bulletType = Bullet
    firingSpeed = 700
    damage = 1
    tower = Resources.Tower
    camoDetection = false
    bulletPierce = 1
    game
    name = 'Gunner'
    upgradeCost = 600
    myArea
    level = 1
    sellWorth
    splitfire = false
    engine
    hawkAttack = false
    hawkTimer = 0
    hawkFiringRate = 300

    constructor(x, y, game) {
        super({width:Resources.Tower.width/2, height:Resources.Tower.height/2})
        this.graphics.use(this.tower.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.15, 0.15)
        this.game = game
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(this.tower.toSprite())
        this.myRange = new Range(this.pos.x,this.pos.y,this.range) 
        engine.currentScene.add(this.myRange) 
        
        this.on('pointerdown', (event) => {
            this.game.upgradeHandler(this.name,this.damage, this.firingRate/60,this.range,this.upgradeCost,this,this.sellWorth)
        })

        this.myArea = new AreaChar(this.pos.x,this.pos.y,80,80)
        engine.currentScene.add(this.myArea)

        this.myRange.on('precollision', (event) => {
            if (event.other instanceof Pidgeon) {
                this.target = event.other

                if (this.timer > this.firingRate && (!event.other.camo || (event.other.camo && this.camoDetection))) {
                    const bullet = new this.bulletType(this, event.other,this.damage,this.firingSpeed,this.camoDetection,this.bulletPierce,0)
                    engine.currentScene.add(bullet)
        
                    this.timer = 0

                    if (this.splitfire) {
                        const bullet2 = new this.bulletType(this, event.other,this.damage,this.firingSpeed,this.camoDetection,this.bulletPierce,1)
                        engine.currentScene.add(bullet2)

                        const bullet3 = new this.bulletType(this, event.other,this.damage,this.firingSpeed,this.camoDetection,this.bulletPierce,-1)
                        engine.currentScene.add(bullet3)
                    }
                }

                
            }
        })
    }    

    onPreUpdate(engine) {
        this.timer++
        if (this.hawkAttack) {
            this.hawkTimer++
        }
        
        if (this.target != '' && (!this.target.camo || (this.target.camo && this.camoDetection))) {
            let multiplier
            let dy = this.pos.y - this.target.pos.y
            let dx = this.pos.x - this.target.pos.x
            let theta = Math.atan(dy/dx)

            //

            if (this.target.pos.x>this.pos.x) {
                multiplier = 0
            }else{
                multiplier = Math.PI
            }  

            this.actions.rotateTo(theta+(multiplier), 6, ex.RotationType.ShortestPath);
        }
        this.graphics.use(this.tower.toSprite())
    }

    levelUp() {
        switch(this.level) {
            case 1:
            break
            case 2:
                this.levelUp2(this.engine)
            break
            case 3:
                this.levelUp3(this.engine)
            break
        }
    }

    upgradeHandler() {
        this.game.upgradeHandler(this.name,this.damage, this.firingRate/60,this.range,this.upgradeCost,this,this.sellWorth)
    }
    resetDamage() {

    }
}