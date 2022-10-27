import usePlayer from "../../hook/usePlayer"
import "./layout.css"

const Layout = () => {

    const player = usePlayer();

    const heartImg = "";

    return (
        <div className="Layout">
            <span>{player.HP}</span>
            <img src={heartImg} alt="Heart" />
        </div>
    )
}

export default Layout