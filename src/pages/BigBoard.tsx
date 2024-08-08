import { useState, useEffect } from "react"
import PlayerCard from "../components/PlayerCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

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
            <Carousel opts={{loop: true, dragFree: true}}>
                <CarouselContent>
                    {players.map((player, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                            <PlayerCard firstName={player.firstName} lastName={player.lastName} height={player.height}
                            position={player.position} PTS={player.PTS} REB={player.REB} AST={player.AST} btnTxt="Add to Board"
                            srcImage="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            altTxt="player name"/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}

export default BigBoard;