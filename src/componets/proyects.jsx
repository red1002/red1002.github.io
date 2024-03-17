import "./proyects.css"
import Card from "./card.jsx"

const Proyects = () => {
    return (
        <section className="proyects">
            <h1 className="proyect-title">Proyects</h1>
            <div className="proyect-container">
                <Card
                    img="/hexadecimal.png"
                    title="title"
                    text="esto es un texto de prueba de una tarjeta como descripcion de un projecto"
                />

                <Card
                    img="/login.png"
                    title="title"
                    text="esto es un texto de prueba de una tarjeta como descripcion de un projecto"
                />

                <Card
                    img="/rgb-slider.png"
                    title="title"
                    text="esto es un texto de prueba de una tarjeta como descripcion de un projecto"
                />
            </div>

        </section>
    )
}

export default Proyects