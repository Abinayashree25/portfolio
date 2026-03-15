import Park from './Hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import picture from "../assets/formal.png";
import Don from "../assets/abi.resume.pdf"
const Hero = () => {
    return <>
        <div className={Park.card} id="Home">
            <div className={Park.item}>
                <h1>Hi, I'm Abinaya Shree</h1>
                <h3>Frontend Developer</h3>
                <p>I am a passionate Frontend Developer focused on building responsive and user-friendly websites. I enjoy learning new technologies and creating modern web experiences.</p>
                <div className={Park.view}>
                    <button><a href="#Project">View Project</a></button>
                    {/* <button className={Park.cvresume}>Resume</button> */}
                    <button className={Park.cvresume}>
                        <a
                            href={Don}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            Resume
                        </a>
                    </button>
                </div>
                <div className={Park.social}>
                    <a href="https://www.linkedin.com/in/abinayashree25" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                    <a href="https://github.com/Abinayashree25" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
            <div className={Park.cardItem}>
                <img src={picture}></img>
            </div>

        </div>
    </>
}
export default Hero;