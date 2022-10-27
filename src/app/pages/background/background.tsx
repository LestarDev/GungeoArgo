import usePlayer from "../../hook/usePlayer";
import PageType from "../../shared/config/pageInterface";
import Card from "../card/Card";
import "./background.css"

const Background = () => {

    const player = usePlayer();


    return (
        <div className="cardWrapper" onLoad={(e: any)=>{
            player.setPageNr(1, 1)

            player.setPageNr(2, 2)
        
            player.setPageNr(3, 3)
        
            player.setPageNr(4, 4)
        
            player.setPageNr(5, 5)
        
            player.setPageNr(6, 6)
        
            player.setPageNr(7, 7)
        
            player.setPageNr(8, 8)
        
            player.setPageNr(9, 9)
        
        }}>
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