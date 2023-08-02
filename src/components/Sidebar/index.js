import { Link, NavLink } from 'react-router-dom' 
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoM} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="moriss" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/moris-m/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/itsMoriss'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/moriss_em'>
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/__moriss/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar