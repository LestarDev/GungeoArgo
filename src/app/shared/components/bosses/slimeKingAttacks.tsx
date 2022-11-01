import usePlayer from "../../../hook/usePlayer";
import PageType from "../../config/pageInterface"
import Slime from "../monsters/slime";
import fireSlime from "../monsters/slimeFire";
import iceSlime from "../monsters/slimeIce";

const SlimeKingBossAttacks = () => {

    const player = usePlayer();

    const changeCardToSlime = () => {
        
        let delPage: number;

        if(player.page1.typ=="Player"){
            delPage = 1;
        } else if(player.page2.typ=="Player"){         
             delPage = 2;
        } else if(player.page3.typ=="Player"){
             delPage = 3;
        } else if(player.page4.typ=="Player"){
             delPage = 4;
        } else if(player.page5.typ=="Player"){
             delPage = 5;
        } else if(player.page6.typ=="Player"){
             delPage = 6;
        } else if(player.page7.typ=="Player"){
             delPage = 7;
        } else if(player.page8.typ=="Player"){
             delPage = 8;
        } else{
             delPage = 9;
        }

        const Pages: number[] = [
            1,2,3,4,5,6,7,8,9
        ].filter(function(item) {
            return item !== delPage
        })

        const Slimes: PageType[] = [
            Slime, fireSlime, fireSlime, iceSlime, iceSlime
        ]

        player.setPage(Pages[Math.floor(Math.random()*Pages.length)], Slimes[Math.floor(Math.random()*Slimes.length)])

    }

    return ({
        changeCardToSlime
    })

}

export default SlimeKingBossAttacks