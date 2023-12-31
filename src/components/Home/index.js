import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-m.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    const nameArray = ['o', 'r', 'i', 's']
    const jobArray = [
      'w',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ]

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
  
    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <span className={`${letterClass} _13`}>,</span>
              <br />
              <span className={`${letterClass} _14`}>I</span>
              <span className={`${letterClass} _15`}>'</span>
              <span className={`${letterClass} _16`}>m</span>
              <img
              src={LogoTitle}
              alt="moriss"
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={17}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={21}
              />
            </h1>
            <h2>Fullstack Developer | Software Engineer | Freelancer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo />
        </div>

        <Loader type='pacman'/>
      </>
    )
  }

export default Home