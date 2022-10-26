import usePlayer from "../../hook/usePlayer";
import PageType from "../../shared/config/pageInterface";
import Card from "../card/Card";
import "./background"

const Background = () => {

    const player = usePlayer();

    const card1: PageType = player.page1 as PageType;


    return (
        <div className="cardWrapper">
            <Card {...card1}/>
        </div>
    )
}

export default Background;