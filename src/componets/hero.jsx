import "./hero.css"


const Hero = () =>{
    return (
        <section className="hero animated animatedFadeInUp fadeInUp">
            <div>
                <h1 className="hero-title">Edgar Lemus <img src="code-solid.svg" alt="" className="hero-title-logo"/></h1>
                <h3 className="hero-subtitle">Web Developer FullStack</h3>
            </div>
            <img src="IMG_20201115_185228_194.jpg" alt="" className="hero-img" />
        </section>
    )
}

export default Hero