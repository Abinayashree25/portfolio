import Mass from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={Mass.reserved} id="Footer">

      <div className={Mass.footerLinks}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Education">Education</a>
        <a href="#Skills">Skills</a>
        <a href="#Experience">Experience</a>
        <a href="#Project">Projects</a>
        <a href="#Contact">Contact</a>
      </div>

      <div className={Mass.footerSocial}>
        <a href="https://www.linkedin.com/in/abinayashree25" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>

        <a href="https://github.com/Abinayashree25" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p className={Mass.copyright}>
        © 2026 Abinaya Shree. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
