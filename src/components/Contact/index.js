import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_6yd20pe',
                'template_lk3wmuo',
                '#myForm',
                'jcND3lFvgX4huFPiq'
            )
            .then (
                () => {
                    alert('Sent email!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send email, please try again.')
                }
            )
      }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities,from small ambitious projects to large projects. However, if you have other requests or inquiries, don't hesitate to reach out.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} id='myForm'>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Moris Mwai,
                    <br/>
                    Kenya,
                    <br/>
                    321-01100 <br/>
                    Kajiado <br/>
                    <span><a href='mailto:mwaimoris@gmail.com'><FontAwesomeIcon icon={faEnvelope} color="#fff" /> mwaimoris@gmail.com</a></span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-1.8437597577512155, 36.78987330804473]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[-1.8437597577512155, 36.78987330804473]}>
                            <Popup>Moris lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact