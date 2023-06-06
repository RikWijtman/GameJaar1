import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import pidgeonImage from '../images/Duif.png'
import pidgeonVliegImage from '../images/Vliegduif.png'
import TowerImage from '../images/Pistoolman.png'
import Tower2Image from '../images/Pistoolman2.png'
import BulletImage from '../images/Kogel.png'
import BackgroundImage from '../images/Map1.png'
import BuyPistoolmanImage from '../images/BuyPistoolman.png'
import RangeImage from '../images/Range.png'
import MoneyImage from '../images/Money.png'
import AreaImage from '../images/areaDenied.png'
import JagerImage from '../images/Jager.png'
import Jager2Image from '../images/Jager2.png'
import BuyJagerImage from '../images/BuyJager.png'
import SniperImage from '../images/Sniper.png'
import Sniper2Image from '../images/Sniper2.png'
import BuySniperImage from '../images/BuySniper.png'
import SniperImageA from '../images/SniperA.png'
import JagerImageA from '../images/JagerA.png'
import TowerImageA from '../images/PistoolmanA.png'
import ArcherImageA from '../images/ArcherA.png'
import HpImage from '../images/Hp.png'
import BlokImage from '../images/Blok.png'
import BlokVliegImage from '../images/Blokvlieg.png'
import BosImage from '../images/Bosvogel.png'
import BosVliegImage from '../images/BosVlieg.png'
import BosBlokImage from '../images/BosBlok.png'
import BosBlokVliegImage from '../images/BosBlokVlieg.png'
import TitaanImage from '../images/Titaan.png'
import LoseImage from '../images/Lost.png'
import WinImage from '../images/Win.png'
import LogoImage from '../images/Logo.png'
import PlayImage from '../images/Play.png'
import ArcherImage from '../images/Archer.png'
import Archer2Image from '../images/Archer2.png'
import BuyArcherImage from '../images/BuyArcher.png'
import HawkImage from '../images/Hawk.png'

const Resources = {
    Pidgeon: new ImageSource(pidgeonImage),
    Tower: new ImageSource(TowerImage),
    Tower2: new ImageSource(Tower2Image),
    Bullet: new ImageSource(BulletImage),
    Background: new ImageSource(BackgroundImage),
    BuyPistoolman: new ImageSource(BuyPistoolmanImage),
    Range: new ImageSource(RangeImage),
    Money: new ImageSource(MoneyImage),
    Area: new ImageSource(AreaImage),
    Jager: new ImageSource(JagerImage),
    Jager2: new ImageSource(Jager2Image),
    BuyJager: new ImageSource(BuyJagerImage),
    Sniper: new ImageSource(SniperImage),
    Sniper2: new ImageSource(Sniper2Image),
    BuySniper: new ImageSource(BuySniperImage),
    SniperA: new ImageSource(SniperImageA),
    JagerA: new ImageSource(JagerImageA),
    ArcherA: new ImageSource(ArcherImageA),
    PistoolmanA: new ImageSource(TowerImageA),
    Hp: new ImageSource(HpImage),
    PidgeonVlieg: new ImageSource(pidgeonVliegImage),
    Blok: new ImageSource(BlokImage),
    BlokVlieg: new ImageSource(BlokVliegImage),
    Bos: new ImageSource(BosImage),
    BosVlieg: new ImageSource(BosVliegImage),
    BosBlok: new ImageSource(BosBlokImage),
    BosBlokVlieg: new ImageSource(BosBlokVliegImage),
    Titaan: new ImageSource(TitaanImage),
    LoseScreen: new ImageSource(LoseImage),
    WinScreen: new ImageSource(WinImage),
    Play: new ImageSource(PlayImage),
    Logo: new ImageSource(LogoImage),
    Archer: new ImageSource(ArcherImage),
    Archer2: new ImageSource(Archer2Image),
    BuyArcher: new ImageSource(BuyArcherImage),
    Hawk: new ImageSource(HawkImage),

}
const ResourceLoader = new Loader([Resources.Pidgeon, 
    Resources.Tower, 
    Resources.Tower2, 
    Resources.Bullet, 
    Resources.Background, 
    Resources.BuyPistoolman, 
    Resources.Range, 
    Resources.Money, 
    Resources.Area, 
    Resources.Jager, 
    Resources.Jager2, 
    Resources.BuyJager, 
    Resources.BuySniper, 
    Resources.Sniper, 
    Resources.Sniper2, 
    Resources.JagerA, 
    Resources.SniperA, 
    Resources.ArcherA, 
    Resources.PistoolmanA, 
    Resources.Hp, 
    Resources.PidgeonVlieg, 
    Resources.Blok, 
    Resources.BlokVlieg, 
    Resources.Bos, 
    Resources.BosVlieg, 
    Resources.BosBlokVlieg, 
    Resources.BosBlok, 
    Resources.Titaan, 
    Resources.Play, 
    Resources.LoseScreen, 
    Resources.WinScreen, 
    Resources.Logo, 
    Resources.Archer, 
    Resources.Archer2, 
    Resources.BuyArcher,
    Resources.Hawk,
])

export { Resources, ResourceLoader }