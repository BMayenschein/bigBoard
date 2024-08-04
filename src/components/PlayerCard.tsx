type CardProps = {
    playerData: JSON,
    srcImage: string,
    btnTxt: string,
}

const Card = ({srcImage, altTxt, title, info, btnTxt} : CardProps) => {
    return (  
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src={srcImage}
                alt={altTxt} />
            </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{info}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">{btnTxt}</button>
            </div>
        </div>
        </div>
    )
}

export default Card