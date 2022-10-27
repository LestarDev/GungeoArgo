import usePlayer from "../../hook/usePlayer";
import PageType from "../../shared/config/pageInterface";
import Card from "../card/Card";
import "./background.css"

const Background = () => {

    const player = usePlayer();

    const cordinatePage1: PageType = {
        typ: player.page1.typ,
        img: player.page1.img,
        pageNr: 1
    }

    const cordinatePage2: PageType = {
        typ: player.page2.typ,
        img: player.page2.img,
        pageNr: 2
    }

    const cordinatePage3: PageType = {
        typ: player.page3.typ,
        img: player.page3.img,
        pageNr: 3
    }

    const cordinatePage4: PageType = {
        typ: player.page4.typ,
        img: player.page4.img,
        pageNr: 4
    }

    const cordinatePage5: PageType = {
        typ: player.page5.typ,
        img: player.page5.img,
        pageNr: 5
    }

    const cordinatePage6: PageType = {
        typ: player.page6.typ,
        img: player.page6.img,
        pageNr: 6
    }

    const cordinatePage7: PageType = {
        typ: player.page7.typ,
        img: player.page7.img,
        pageNr: 7
    }

    const cordinatePage8: PageType = {
        typ: player.page8.typ,
        img: player.page8.img,
        pageNr: 8
    }

    const cordinatePage9: PageType = {
        typ: player.page9.typ,
        img: player.page9.img,
        pageNr: 9
    }

    return (
        <div className="cardWrapper">
            <Card {...cordinatePage1} />
            <Card {...cordinatePage2} />
            <Card {...cordinatePage3} />

            <Card {...cordinatePage4} />
            <Card {...cordinatePage5} />
            <Card {...cordinatePage6} />

            <Card {...cordinatePage7} />
            <Card {...cordinatePage8} />
            <Card {...cordinatePage9} />
        </div>
    )
}

export default Background;