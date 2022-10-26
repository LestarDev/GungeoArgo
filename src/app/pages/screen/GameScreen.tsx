import usePlayer from "../../hook/usePlayer";
import Background from "../background/background";

const GameScreen = () => {

    const player = usePlayer();

    return (
        <>
            <Background pageAny={player.page1} />
            <Background pageAny={player.page2} />
            <Background pageAny={player.page3}/>

            <Background pageAny={player.page4}/>
            <Background pageAny={player.page5}/>
            <Background pageAny={player.page6}/>

            <Background pageAny={player.page7}/>
            <Background pageAny={player.page8}/>
            <Background pageAny={player.page9}/>
        </>
    )
}

export default GameScreen;