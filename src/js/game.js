import '../css/style.css'
import * as ex from 'excalibur'
import { Actor, Engine, Vector, TextAlign } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Pidgeon } from './vogel'
import { Background } from './map1'
import { Buy1 } from './buy1'
import { Buy2 } from './buy2'
import { Buy3 } from './buy3'
import { Money } from './money'
import { Area } from './areaDenied'
import { AreaHigh } from './areaHigh'
import { Hp } from './hp'

export class Game extends Engine {

    tower
    pidgeon
    cashLabel
    roekoes = 500
    waveTimer = 0
    currentWave = 0
    enemyAmount = 0
    enemiesSpawned = 0
    baseHp = 100

    constructor() {
        super({ width: 576, height: 676 })
        this.start(ResourceLoader).then(() => this.startGame())

        //this.showDebug(true)
        //this.debug.transform.showAll = true
    }

    startGame() {
        const background = new Background
        this.add(background)

        const buytower1 = new Buy1(this)
        this.add(buytower1)
        const buytower2 = new Buy2(this)
        this.add(buytower2)
        const buytower3 = new Buy3(this)
        this.add(buytower3)

        const money = new Money()
        this.add(money)
        const hp = new Hp()
        this.add(hp)

        this.cashLabel = new ex.Label({
            text: 'cash',
            pos: ex.vec(525, 28),
            font: new ex.Font({
                size: 24,
                unit: ex.FontUnit.Px,
                textAlign: TextAlign.Right
            })
        });
        this.add(this.cashLabel)
        this.hpLabel = new ex.Label({
            text: 'cash',
            pos: ex.vec(525, 58),
            font: new ex.Font({
                size: 24,
                unit: ex.FontUnit.Px,
                textAlign: TextAlign.Right
            })
        });
        this.add(this.hpLabel)
        this.waveLabel = new ex.Label({
            text: 'cash',
            pos: ex.vec(480, 88),
            font: new ex.Font({
                size: 24,
                unit: ex.FontUnit.Px,
                textAlign: TextAlign.Left
            })
        });
        this.add(this.waveLabel)

        this.Wave1()
        this.placeAreas()
    }

    onPostUpdate() {
        this.waveTimer++

        switch(this.currentWave) {
            case 0:
                break
            case 1:
                if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Pidgeon(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
        }

        this.cashLabel.text = this.roekoes + ''
        this.hpLabel.text = this.baseHp + ''
        this.waveLabel.text = 'wave ' + this.currentWave
    }

    placeAreas() {
        const areaWater = new Area(240,98,110,145)
        this.add(areaWater)

        const areaPath1 = new Area(125,160,80,420)
        this.add(areaPath1)
        const areaPath2 = new Area(200,330,70,80)
        this.add(areaPath2)
        const areaPath3 = new Area(275,275,80,190)
        this.add(areaPath3)
        const areaPath4 = new Area(367,220,103,80)
        this.add(areaPath4)
        const areaPath5 = new Area(458.5,378,80,396)
        this.add(areaPath5)

        const areaTree1 = new Area(45,215,70,70)
        this.add(areaTree1)
        const areaTree2 = new Area(350,135,70,70)
        this.add(areaTree2)
        const areaTree3 = new Area(520,165,70,70)
        this.add(areaTree3)
        const areaTree4 = new Area(295,420,70,70)
        this.add(areaTree4)

        const areaHill1 = new Area(55,505,110,140)
        this.add(areaHill1)
        const areaHill2 = new Area(170,523,120,105)
        this.add(areaHill2)
        const areaHighHill1 = new AreaHigh(55,505,110,140)
        this.add(areaHighHill1)
        const areaHighHill2 = new AreaHigh(170,523,120,105)
        this.add(areaHighHill2)

        const areaUnder = new Area(290,626,580,100)
        this.add(areaUnder)
        const areaText = new Area(520,50,110,110)
        this.add(areaText)
    }

    buyTower(cost) {
        this.roekoes -= cost
    }
    gainCash(cash) {
        this.roekoes += cash
        console.log(this.roekoes);
    }
    deleteTower(cash) {
        this.roekoes += cash
    }
    takeDamage(damage) {
        this.baseHp -= damage
        console.log(this.baseHp);
    }

    Wave1() {
        this.currentWave = 1
        this.enemyAmount = 5
    }
}

new Game()


/*
todo:
eerste targetten -
maken van waves
nieuwe wave logo

dmg etc fix
upgrades
menu

meer maps
meer towers
meer enemies
gamemodes
*/