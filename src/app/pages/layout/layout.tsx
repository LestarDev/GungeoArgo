import usePlayer from "../../hook/usePlayer"
import "./layout.css"

const Layout = () => {

    const player = usePlayer();

    const heartImg = "";

    const goldIcon = ""

    return (
        <div className="Layout">
            <div><span>{player.HP}</span>
            <img src={heartImg} alt="Heart" /></div>
            <div><span>{player.GOLD}</span>
            <img src={goldIcon} alt="Gold" /></div>
        </div>
    )
}

export default Layout