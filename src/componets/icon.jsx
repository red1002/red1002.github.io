import "./icon.css"

const Icon = ({img}) =>{
    return(
        <span className="icon"><img src={img} alt="icon" /></span>
    )
}

export default Icon