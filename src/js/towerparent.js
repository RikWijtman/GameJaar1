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
    target = 'T'
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
    engine
    hawkTimer = 0
    hawkFiringRate = 300
    titanDamage = this.damage
    hawkAway = 0
    upgradeTag = ''
    titanBoost = false
    hawkAttack = false
    splitfire = false

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
            this.game.upgradeHandler(this.name,this.damage, this.firingRate/60,this.range,this.upgradeCost,this,this.sellWorth, this.upgradeTag)
        })

        this.myArea = new AreaChar(this.pos.x,this.pos.y,80,80)
        engine.currentScene.add(this.myArea)

        this.myRange.on('precollision', (event) => {
            if (event.other instanceof Pidgeon) {
                if (event.other.camo && !this.camoDetection) {
                    return
                }
                if (this.target == 'T') {
                    this.target = event.other
                }
                if (event.other.far > this.target.far) {
                    this.target = event.other
                }
            }
        })
    }    

    onPreUpdate(engine) {
        if (this.target.hp <= 0) {
            this.target = 'T'
        }
        if (!this.titanBoost) {
            this.titanDamage = this.damage
        }else{
            this.titanDamage = this.damage*2
        }
        this.timer++
        if (this.hawkAttack) {
            this.hawkAway++
            this.hawkTimer++
            if (this.hawkTimer > this.hawkFiringRate) {
                this.tower = Resources.Jager
                this.hawkAway = 0
            }
            if (this.hawkAway > 280) {
                this.tower = Resources.Jager2
            }
        }
        
        if (this.target != 'T' && (!this.target.camo || (this.target.camo && this.camoDetection))) {
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

            this.actions.rotateTo(theta+(multiplier), 20, ex.RotationType.ShortestPath);

            if (this.timer > this.firingRate && (!this.target.camo || (this.target.camo && this.camoDetection))) {
                const bullet = new this.bulletType(this, this.target,this.damage,this.firingSpeed,this.camoDetection,this.bulletPierce,0,this.titanBoost,this.titanDamage,this.bouncingShot)
                engine.currentScene.add(bullet)
    
                this.timer = 0

                if (this.splitfire) {
                    const bullet2 = new this.bulletType(this, this.target,this.damage,this.firingSpeed,this.camoDetection,this.bulletPierce,1,this.titanBoost,this.titanDamage)
                    engine.currentScene.add(bullet2)

                    const bullet3 = new this.bulletType(this, this.target,this.damage,this.firingSpeed,this.camoDetection,this.bulletPierce,-1,this.titanBoost,this.titanDamage)
                    engine.currentScene.add(bullet3)
                }
            }
            if (this.hawkTimer > this.hawkFiringRate && (!this.target.camo || (this.target.camo && this.camoDetection))) {
                const hawk = new Hawk(this, this.target,3,300,true,Infinity,0,false,5)
                engine.currentScene.add(hawk)
    
                this.hawkTimer = 0
            }
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
        this.game.upgradeHandler(this.name,this.damage, this.firingRate/60,this.range,this.upgradeCost,this,this.sellWorth,this.upgradeTag)
    }
    resetDamage() {

    }
}