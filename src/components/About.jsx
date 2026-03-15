import Strong from './About.module.css'
import Button from './Button.jsx'
import picture from "../assets/profile.jpg";
import Doms from "../assets/abinayaresume25.pdf"

const About = () => {
  return (
    <div className={Strong.develop} id="About">

      <div className={Strong.image}>
        <img className={Strong.build} src={picture} ></img>
      </div>

      <div className={Strong.passion}>
        <h1>About Me</h1>
        <p>
          I am Abinaya Shree, a final year Computer Science Engineering student with a strong interest in web development. I enjoy designing and developing clean, interactive, and modern websites that provide a smooth user experience. I have experience working with HTML, CSS, JavaScript, and React, and I like transforming ideas into real web applications. I focus on writing structured code, creating responsive layouts, and improving the usability of web interfaces. Apart from development, I am always curious to explore new tools and frameworks that help me grow as a developer. My goal is to continuously improve my skills and build innovative web solutions that make a meaningful impact.
        </p>

        <div className={Strong.student}>
          {/* <button>Download CV</button> */}
          <a
            href={Doms}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              val="View Resume"
              cl="white"
              br="30px"
              pa="10px 20px"
              fs="16px"
              cur="pointer"
              bd="none"
              tc="transform 0.3s ease, box-shadow 0.3s ease"
              bc="linear-gradient(45deg,#ff4d5a,#ff9a44)"
            />
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;
