import usePlayer from "../../hook/usePlayer";
import { cardTyp } from "./pageInterface";


const initalizePages = () => {
    
    const player = usePlayer();

    const page1: cardTyp = {
        page: player.page1,
        pageNr: 1
    }

    const page2: cardTyp = {
        page: player.page2,
        pageNr: 2
    }

    const page3: cardTyp = {
        page: player.page3,
        pageNr: 3
    }

    const page4: cardTyp = {
        page: player.page4,
        pageNr: 4
    }

    const page5: cardTyp = {
        page: player.page5,
        pageNr: 5
    }

    const page6: cardTyp = {
        page: player.page6,
        pageNr: 6
    }

    const page7: cardTyp = {
        page: player.page7,
        pageNr: 7
    }

    const page8: cardTyp = {
        page: player.page8,
        pageNr: 8
    }

    const page9: cardTyp = {
        page: player.page9,
        pageNr: 9
    }

    return ({
        page1, page2, page3, page4, page5, page6, page7, page8, page9
    })
}

export default initalizePages;