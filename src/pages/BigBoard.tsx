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
    // const getPlayers =  async () => {
    //     try {
    //         const res = await fetch("http://localhost:5000/players/getPlayers")
    //         const data = await res.json()
        
    //         setPlayers(data)
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

    useEffect(() => {
        async function getPlayers() {
            const res = await fetch("http://localhost:5000/players/getPlayers")
            const data = await res.json()
            setPlayers(data)
            console.log(players)
        }
        getPlayers()
    }, [])

    return (
        <>
            {players.map((player, index) => {
                <p key={index}>{player.firstName}</p>
            })}
        </>
    )
}

export default BigBoard;