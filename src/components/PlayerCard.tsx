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
    return (  
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src={srcImage}
                alt={altTxt} />
            </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName} {lastName}</h2>
            <p>{height} {position}</p>
            <p>{PTS} | {REB} | {AST}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">{btnTxt}</button>
            </div>
        </div>
        </div>
    )
}

export default PlayerCard