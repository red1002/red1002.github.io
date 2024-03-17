import "./skills.css"
import Icon from "./icon"

const Skills = () =>{
    return(
        <section className="skills">
            <h1 className="skills-title">My Skills</h1>
            <div className="skills-container">
                <Icon img = "html-5.png"/>
                <Icon img = "css-3.png"/>
                <Icon img = "js.png"/>
                <Icon img = "git.png"/>
                <Icon img = "React-icon.png"/>
            </div>
        </section>
    )
}

export default Skills