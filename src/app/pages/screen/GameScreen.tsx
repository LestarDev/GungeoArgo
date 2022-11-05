import usePlayer from "../../hook/usePlayer";
import Background from "../background/background";
import BossCard from "../boss/BossCard";
import GameOver from "../gameover/GameOver";
import Layout from "../layout/layout";

const GameScreen = () => {
    
    return (
        <div>
            <BossCard />
            <Background />
            <Layout />
            <GameOver />
        </div>
    )
}

export default GameScreen;