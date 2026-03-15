import Niki from './Skills.module.css'
import picture from "../assets/html11.png"
import picture1 from "../assets/css1.png"
import picture2 from "../assets/jss.png"
import picture3 from "../assets/react1.png"
import picture4 from "../assets/nodee.png"
import picture5 from "../assets/mongoo.png"
import picture6 from "../assets/netifly.png"
import picture7 from "../assets/bootstrap.webp"
import picture8 from "../assets/git.png"
const Skills = () => {
    const skillsData = [
        { img: picture, percent: "95%", name: "HTML" },
        { img: picture1, percent: "85%", name: "CSS" },
        { img: picture2, percent: "80%", name: "JavaScript" },
        { img: picture3, percent: "85%", name: "React" },
        { img: picture4, percent: "95%", name: "Node.js" },
        { img: picture5, percent: "90%", name: "MongoDB" },
        { img: picture6, percent: "97%", name: "Netlify" },
        { img: picture7, percent: "87%", name: "Bootstrap" },
        { img: picture8, percent: "95%", name: "Github" },
    ]
    return <>
        <div className={Niki.talent} id="Skills">
            <h1>Skills & Technology</h1>

            <div className={Niki.skillImage}>
                {skillsData.map((skill, index) =>
                (
                    <div key={index}>
                        <img className={Niki.boot} src={skill.img} alt={skill.name} />
                        <p>{skill.percent}</p>
                        <h3>{skill.name}</h3>
                    </div>
                ))}


            </div>
        </div>
    </>
}
export default Skills;