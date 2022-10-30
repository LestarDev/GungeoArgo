import usePlayer from "../../hook/usePlayer"
import "./layout.css"
import heartIcon from "./../../../assets/health.png"
import coinIcon from "./../../../assets/coin.png"
import normalIcon from "./../../../assets/attack.png"

const Layout = () => {

    const player = usePlayer();

    let dmgIcon: string = ""

    let hideFire: string = "hidden"
    let hideIce: string = "hidden"

    switch(player.DamageType){
        case "Ice":
            dmgIcon="Ice"
            break;
        case "Fire":
            dmgIcon="Fire"
            break;
        default:
            dmgIcon=normalIcon
    }

    if(player.RoundEffect.untilFired>0) hideFire=""
    if(player.RoundEffect.iced>0) hideIce=""

    return (
        <div className="Layout">
            <div><span>{player.HP}/15</span>
            <img src={heartIcon} alt="Heart" /></div>
            <div><span>{player.GOLD}</span>
            <img src={coinIcon} alt="Gold" /></div>
            <div><span>{player.DamageType}</span>
            <img src={dmgIcon} alt="Dmg Icon" /></div>
            <div><span>{player.RoundEffect.untilSuperAbility}</span>
            <img src="" alt="s" /></div>
            <div className={hideFire}><span>{player.RoundEffect.untilFired}</span>
            <img src="" alt="f" /></div>
            <div className={hideIce}><span>{player.RoundEffect.iced}</span>
            <img src="" alt="i" /></div>
        </div>
    )
}

export default Layout