import usePlayer from "../../hook/usePlayer"
import bossIcon from "./../../../assets/slime_king.png"
import "./BossCard.css"
import heartIcon from "./../../../assets/health.png"
import attackIcon from "./../../../assets/attack.png"

const BossCard = () => {

    const player = usePlayer()

    let classNameBoss: string = "bossAbsolut hideBoss"

    if(player.isBoss) classNameBoss="bossAbsolut boss"

    return (
        <div className={classNameBoss}>
            <img src={bossIcon} alt="Boss" />
            <span>Slime King</span>
            <div><span>{player.currentBoss.HP}</span><img src={heartIcon} alt="h" />
            <span>&nbsp;{player.currentBoss.ATK}</span><img src={attackIcon} alt="a" /></div>
        </div>
    )
}

export default BossCard