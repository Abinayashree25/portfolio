import Duke from './Experience.module.css'
import picture from "../assets/srishti.webp"
import picture8 from "../assets/ab.png"
import picture9 from "../assets/orivonar.webp"
const Experience = () => {
    return <>
        <div className={Duke.experience} id="Experience">
            <h1>Experience</h1>
            <div className={Duke.experienceSection}>
            <div className={Duke.expCard}>
                 <span className={Duke.expNumber}>01</span>
                <img src={picture9}></img>
                <h3>MERN Stack Developer Intern</h3>
                <h4>Orvionar Tech Pvt Ltd</h4>
                {/* <p>Jan 05, 2026 – Mar 31, 2026</p> */}
                <p>Worked on full stack web development using MongoDB, Express.js, React.js, and Node.js.</p>
            </div>
            <div className={Duke.expCard}>
                 <span className={Duke.expNumber}>02</span>
                <img src={picture8}></img>
                <h3>AI with Deep Learning Intern</h3>
                <h4>AB Technologies</h4>
                {/* <p>Jun 23, 2025 – Jul 04, 2025</p> */}
                <p>Learned fundamentals of Artificial Intelligence and Deep Learning using Python.</p>
            </div>
            <div className={Duke.expCard}>
                 <span className={Duke.expNumber}>03</span>
                <img src={picture}></img>
                <h3>Python Programming Intern</h3>
                <h4>Srishti Company</h4>
                {/* <p>2024</p> */}
                <p>Worked on Python basics, problem solving, and small application development.</p>
            </div>
            </div>
        </div>
    </>
}
export default Experience;