import usePlayer from "../../hook/usePlayer";
import PageType from "../../shared/config/pageInterface";
import Card from "../fragment/card";
import "./background"

const Background = () => {

    const player = usePlayer();

    const card1: PageType = player.page1 as PageType;


    return (
        <div>
            {card1.typ}
        </div>
    )
}

export default Background;