import '../css/style.css'
import * as ex from 'excalibur'
import { Actor, Engine, Vector, TextAlign, Scene } from "excalibur"
import { Pidgeon } from './vogel'
import { PidgeonVlieg } from './vliegDuif'
import { Blok } from './dikkekip'
import { BlokVlieg } from './dikkevliegkip'
import { Bosvogelvlieg } from './bosvogelvlieg'
import { Bosvogel } from './bosvogel'
import { TitaanVogel } from './titaanvogel'
import { Background } from './map1'
import { Buy1 } from './buy1'
import { Buy2 } from './buy2'
import { Buy3 } from './buy3'
import { Buy4 } from './buy4'
import { Money } from './money'
import { Area } from './areaDenied'
import { AreaHigh } from './areaHigh'
import { Hp } from './hp'
import { Placeholder } from './placeholderpistoolman.js'
import { Placeholder2 } from './placeholderjager.js'
import { Placeholder3 } from './placeholdersniper.js'

export class Battlefield extends Scene {

    tower
    pidgeon
    cashLabel
    roekoes = 3000
    waveTimer = 0
    waveTime = 0
    currentWave = 0
    enemyAmount = 0
    enemiesSpawned = 0
    baseHp = 100
    placeTower
    game

    constructor(game) {
        super()
        this.game = game
        //this.showDebug(true)
        //this.debug.transform.showAll = true
    }

    onInitialize() {
        const background = new Background
        this.add(background)

        const buytower1 = new Buy1(this, this.roekoes)
        this.add(buytower1)
        const buytower2 = new Buy2(this)
        this.add(buytower2)
        const buytower3 = new Buy3(this)
        this.add(buytower3)
        const buytower4 = new Buy4(this)
        this.add(buytower4)

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

        this.Wave15()
        this.placeAreas()
    }

    onPostUpdate() {
        if (this.baseHp <= 0) {
            console.log('you lost');
        }
        this.waveTimer++
        this.waveTime--

        switch(this.currentWave) {
            case 0:
                break
            case 1:
                if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Pidgeon(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave2()
                }
                 break
            case 2:
                if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Pidgeon(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave3()
                }
                break
            case 3:
                if (this.waveTimer > 80 && this.enemiesSpawned <= 7) {
                    this.add(new Pidgeon(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }else if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new PidgeonVlieg(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave4()
                }
                break
            case 4:
                if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new PidgeonVlieg(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave5()
                }
                break
            case 5:
                if (this.waveTimer > 80 && this.enemiesSpawned <= 3) {
                    this.add(new Pidgeon(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }else if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Blok(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave6()
                }
                break
            case 6:
                if (this.waveTimer > 80 && this.enemiesSpawned <= 2) {
                    this.add(new Pidgeon(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }else if (this.waveTimer > 80 && this.enemiesSpawned <= 4) {
                    this.add(new PidgeonVlieg(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }else if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Blok(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave7()
                }
                break
            case 7:
                if (this.waveTimer > 100 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Blok(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave8()
                }
                    break
            case 8:
                if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new BlokVlieg(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave9()
                }
                    break
            case 9:
                if (this.waveTimer > 60 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new PidgeonVlieg(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave10()
                }
                    break
            case 10:
                if (this.waveTimer > 10 && this.enemiesSpawned <= 0) {
                    this.add(new Bosvogel(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }else if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Blok(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave11()
                }
                break
            case 11:
                if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new BlokVlieg(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave12()
                }
                    break
            case 12:
                if (this.waveTimer > 20 && this.enemiesSpawned <= 2) {
                    this.add(new Bosvogelvlieg(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }else if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Bosvogel(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave13()
                }
                break
            case 13:
                if (this.waveTimer > 80 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new BlokVlieg(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave14()
                }
                    break
            case 14:
                if (this.waveTimer > 30 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new Pidgeon(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    this.Wave15()
                }
                break
            case 15:
                if (this.waveTimer > 60 && this.enemiesSpawned <= 2) {
                    this.add(new Blok(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }else if (this.waveTimer > 120 && this.enemiesSpawned != this.enemyAmount) {
                    this.add(new TitaanVogel(this))
                    this.waveTimer = 0
                    this.enemiesSpawned++
                }
                if (this.waveTime <= 0) {
                    console.log('you won');
                }
                break
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
        const areaHighTree1 = new AreaHigh(45,215,5,5)
        this.add(areaHighTree1)
        const areaHighTree2 = new AreaHigh(350,135,5,5)
        this.add(areaHighTree2)
        const areaHighTree3 = new AreaHigh(520,165,5,5)
        this.add(areaHighTree3)
        const areaHighTree4 = new AreaHigh(295,420,5,5)
        this.add(areaHighTree4)

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

    placeholderHandler(cost,placeh) {
        if (this.roekoes >= cost && !this.placeTower) {
            this.placeTower = true
            if (placeh == 1) {
                const placeholder = new Placeholder(this, cost)
                this.add(placeholder)
            }else if (placeh == 2) {
                const placeholder = new Placeholder2(this, cost)
                this.add(placeholder)
            }else if (placeh == 3) {
                const placeholder = new Placeholder3(this, cost)
                this.add(placeholder)
            }else if (placeh == 4) {
                const placeholder = new Placeholder4(this, cost)
                this.add(placeholder)
            }
            this.buyTower(cost)
        }
    }
    buyTower(cost) {
        this.roekoes -= cost
    }
    gainCash(cash) {
        this.roekoes += cash
    }
    deleteTower(cash) {
        this.roekoes += cash
    }
    takeDamage(damage) {
        this.baseHp -= damage
    }
    cancelplacing() {
        this.placeTower = false
    }

    Wave1() {
        this.roekoes += 550
        this.waveTime = 1000
        this.currentWave = 1
        this.enemyAmount = 5
    }
    Wave2() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 80
        this.currentWave = 2
        this.enemyAmount = 10
    }
    Wave3() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 110
        this.currentWave = 3
        this.enemyAmount = 10
    }
    Wave4() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 120
        this.currentWave = 4
        this.enemyAmount = 6
    }
    Wave5() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 145
        this.currentWave = 5
        this.enemyAmount = 6
    }
    Wave6() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 150
        this.currentWave = 6
        this.enemyAmount = 6
    }
    Wave7() {
        this.enemiesSpawned = 0
        this.waveTime = 1400
        this.roekoes += 150
        this.currentWave = 7
        this.enemyAmount = 8
    }
    Wave8() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 120
        this.currentWave = 8
        this.enemyAmount = 3
    }
    Wave9() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 180
        this.currentWave = 9
        this.enemyAmount = 12
    }
    Wave10() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 150
        this.currentWave = 10
        this.enemyAmount = 6
    }
    Wave11() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 180
        this.currentWave = 11
        this.enemyAmount = 6
    }
    Wave12() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 200
        this.currentWave = 12
        this.enemyAmount = 8
    }
    Wave13() {
        this.enemiesSpawned = 0
        this.waveTime = 1000
        this.roekoes += 210
        this.currentWave = 13
        this.enemyAmount = 18
    }
    Wave14() {
        this.enemiesSpawned = 0
        this.waveTime = 1200
        this.roekoes += 200
        this.currentWave = 14
        this.enemyAmount = 40
    }
    Wave15() {
        this.enemiesSpawned = 0
        this.waveTime = 2500
        this.roekoes += 180
        this.currentWave = 15
        this.enemyAmount = 4
    }
}


