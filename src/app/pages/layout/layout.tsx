import usePlayer from "../../hook/usePlayer"
import "./layout.css"
import heartIcon from "./../../../assets/health.png"
import coinIcon from "./../../../assets/coin.png"

const Layout = () => {

    const player = usePlayer();

    return (
        <div className="Layout">
            <div><span>{player.HP}</span>
            <img src={heartIcon} alt="Heart" /></div>
            <div><span>{player.GOLD}</span>
            <img src={coinIcon} alt="Gold" /></div>
        </div>
    )
}

export default Layout