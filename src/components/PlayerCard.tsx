import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

type PlayerCardProps = {
    firstName: string,
    lastName: string,
    height: string,
    position: string,
    PTS: string,
    REB: string,
    AST: string,
    altTxt: string,
    srcImage: string,
    btnTxt: string,
}

const PlayerCard = ({firstName, lastName, height, position, PTS, REB, AST, srcImage, altTxt, btnTxt} : PlayerCardProps) => {


    return(
        <Card>
            <CardHeader>
                <CardTitle>{firstName} {lastName}</CardTitle>
                <CardDescription>{height} {position}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={srcImage} alt={altTxt}/>
                {PTS} | {REB} | {AST}
            </CardContent>
            <CardFooter>
                <p>{btnTxt}</p>
            </CardFooter>
        </Card>
    )
}

export default PlayerCard