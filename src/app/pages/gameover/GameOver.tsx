import usePlayer from "../../hook/usePlayer"
import "./GameOver.css"

const GameOver = () => {

    const player = usePlayer()

    const classNameGameOver: string = (player.HP<=0 || player.GOLD>=1000) ? "GameOverScreen" : "hide" 

    return (
        <div className={classNameGameOver}>
            <div className="backgroundGameOver" onClick={(e: React.MouseEvent)=>{
                window.location.reload();
            }}>
                <p>Game Over</p>
                <span>Wynik: {player.GOLD}/1000</span>
            </div>
        </div>
    )
}

export default GameOver