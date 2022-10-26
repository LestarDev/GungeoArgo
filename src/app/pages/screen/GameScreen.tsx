import usePlayer from "../../hook/usePlayer";
import Background from "../background/background";

const GameScreen = () => {

    const player = usePlayer();

    return (
        <>
            <Background page={player.page1} />
            <Background />
            <Background />

            <Background />
            <Background />
            <Background />

            <Background />
            <Background />
            <Background />
        </>
    )
}

export default GameScreen;