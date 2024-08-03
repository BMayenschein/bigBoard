import { useState } from "react"

const BigBoard = () => {
    const [players, setPlayers] = useState("")
    const getPlayers =  async () => {
        const res = await fetch("http://localhost:5000/players/getPlayers")
        const data = await res.json();
    
        setPlayers(data)
    }

    return (
        <h1>Big Board</h1>
    )
}

export default BigBoard;