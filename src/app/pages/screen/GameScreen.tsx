import usePlayer from "../../hook/usePlayer";
import Background from "../background/background";

const GameScreen = () => {

    function Page(){
        const player = usePlayer();

        switch(player.page){
            case 1:
                return <Background />
            default:
                return <Background />
        }
    }

    return (
        <>
            <Page />
        </>
    )
}

export default GameScreen;