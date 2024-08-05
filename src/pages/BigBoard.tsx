import { useState, useEffect } from "react"
import PlayerCard from "../components/PlayerCard"

type PlayerInfo = {
    id: string,
    firstName: string,
    lastName: string,
    position: string,
    prevTeam: string,
    age: string,
    height: string,
    wingspan: string,
    PTS: string,
    REB: string,
    AST: string
}

const BigBoard = () => {
    const [players, setPlayers] = useState<PlayerInfo[]>([])

    useEffect(() => {
        async function getPlayers() {
            const res = await fetch("http://localhost:5000/players/getPlayers")
            const data = await res.json()
            setPlayers(data)
        }
        getPlayers()
    }, [])

    return (
        <>
            <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                {players.map((player, index) => (
                    <div key={index} className="carousel-item">
                        <PlayerCard firstName={player.firstName} lastName={player.lastName} height={player.height}
                        position={player.position} PTS={player.PTS} REB={player.REB} AST={player.AST} btnTxt="Add to Board"
                        srcImage="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        altTxt="player name"/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BigBoard;