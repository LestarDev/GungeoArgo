import usePlayer from "../../hook/usePlayer";
import Background from "../background/background";
import BossCard from "../boss/BossCard";
import Layout from "../layout/layout";

const GameScreen = () => {

    const player = usePlayer();
    
    return (
        <div>
            <BossCard />
            <Background />
            <Layout />
        </div>
    )
}

export default GameScreen;