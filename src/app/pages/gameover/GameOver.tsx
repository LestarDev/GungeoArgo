import usePlayer from "../../hook/usePlayer"
import "./GameOver.css"

const GameOver = () => {

    const player = usePlayer()

    const classNameGameOver: string = player.HP<=0 ? "GameOverScreen" : "hide" 

    return (
        <div className={classNameGameOver}>
            <div className="backgroundGameOver" onClick={(e: React.MouseEvent)=>{
                window.location.reload();
            }}>
                <p>Game Over</p>
            </div>
        </div>
    )
}

export default GameOver