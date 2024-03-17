import "./card.css"

const Card = ({img, title, text}) => {
    return (
        <div className="card">
            <img src={img} alt="card img" className="card-img" />
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
    )
}

export default Card