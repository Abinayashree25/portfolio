import Shree from './Navbar.module.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div className={Shree.head} id='Home'>
        <div className={Shree.logo}></div>
      <div>
        <h1>Abinaya Shree</h1>
      </div>

      <div className={Shree.nav}>
        <input type="checkbox" id="check" className={Shree.check}/>

        {/* hamburger */}
        <label htmlFor="check" className={Shree.checking}>
          <FontAwesomeIcon icon={faBars}/>
        </label>

        <ul className={Shree.menu}>
          
          <li> <a href="#Home">Home</a></li>
          <li><a href="#About">About </a></li>
          <li><a href="#Education">Education</a></li>
          <li> <a href="#Skills">Skills</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Contact">Contact</a></li>
          
          {/* <li><div>
        <Button
          val="Get in Touch"
          cl="white"
          br="30px"
          pa="10px 20px"
          fs="16px"
          cur="pointer"
          bd="none"
          ts="transform 0.3s ease, box-shadow 0.3s ease"
          bc="linear-gradient(45deg,#ff4d5a,#ff9a44)"
        />
      </div></li> */}
        </ul>
      </div>

      {/* Button */}
      
    </div>
  );
};

export default Navbar;