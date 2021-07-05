import React from 'react'
import logo from '../assets/images/watchFlixLogo.png'
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
import Styles from '../assets/stylesheet/Footer.module.css'


const Footer = () => {
    return (
        <div className={Styles.footer}>
            <div>
                <img className={Styles.logo} src={logo} alt="Logo"/>
            </div>
            <div>
                <p class="text-white pt-2"> By Carlos Gutierrez Software Developer</p>
            </div>
            <div  className={Styles.right}> 
                <p>Connect with the developer: </p>
                <a href="https://www.linkedin.com/in/carlosalbeniogutierrez/"><img className={Styles.logo} src={linkedin} alt="Linkedin Logo"/></a>
                <a href="https://github.com/cgcarlosg/redux-for-bootcamp"><img src={github} className={Styles.logo} alt="Github Logo"/></a>
            </div>
        </div>
    )
}

export default Footer