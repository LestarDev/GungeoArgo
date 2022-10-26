import usePlayer from "../../hook/usePlayer";
import PageType from "../../shared/config/pageInterface";
import Card from "../card/Card";
import "./background.css"

const Background = () => {

    const player = usePlayer();


    return (
        <div className="cardWrapper">
            <Card {...player.page1} />
            <Card {...player.page2} />
            <Card {...player.page3} />

            <Card {...player.page4} />
            <Card {...player.page5} />
            <Card {...player.page6} />

            <Card {...player.page7} />
            <Card {...player.page8} />
            <Card {...player.page9} />
        </div>
    )
}

export default Background;