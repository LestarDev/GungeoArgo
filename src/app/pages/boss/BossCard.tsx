import usePlayer from "../../hook/usePlayer"
import bossIcon from "./../../../assets/slime_king.png"
import "./BossCard.css"

const BossCard = () => {

    const player = usePlayer()

    let classNameBoss: string = "bossAbsolut hideBoss"

    if(player.isBoss) classNameBoss="bossAbsolut boss"

    return (
        <div className={classNameBoss}>
            <img src={bossIcon} alt="Boss" />
            <span>Slime King</span>
        </div>
    )
}

export default BossCard