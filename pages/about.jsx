import styles from '../styles/About.module.css'
import Image from 'next/image'

import Navbar from '../components/Navbar/Navbar'

import GithubLight from '../components/Socials/GithubLight'
import GithubDark from '../components/Socials/GithubDark'
import LinkedInLight from '../components/Socials/LinkedInLight'
import LinkedInDark from '../components/Socials/LinkedInDark'
import MediumLight from '../components/Socials/MediumLight'
import MediumDark from '../components/Socials/MediumDark'
import TwitterLight from '../components/Socials/TwitterLight'
import TwitterDark from '../components/Socials/TwitterDark'
import YouTubeLight from '../components/Socials/YouTubeLight'
import YouTubeDark from '../components/Socials/YouTubeDark'

import deta from '../public/about/daniel.png'


export default function Articles ({ isDark, handleSetOverlay, handleSetDarkTheme }) {
    return (
        <div className={styles.wrapper}>
            <Navbar isDark={isDark} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />
            

            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 id={`${isDark ? "" : "black-txt"}`}>::about</h1>
                    <p id={`${isDark ? "" : "black-txt"}`}>
                        I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
                        <br />
                        <br />
                        The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.
                        <br />
                        <br />
                        I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.
                        <br />
                        <br />
                        Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.
                    </p>
                </div>

                <div className={styles.graphic}>
                    <Image 
                        src={deta}
                        alt="Onyedikachi."
                    />

                    <div className={styles.links}>
                        {isDark ? <GithubLight /> : <GithubDark />} 
                        {isDark ? <LinkedInLight /> : <LinkedInDark />} 
                        {isDark ? <MediumLight /> : <MediumDark />} 
                        {isDark ? <TwitterLight /> : <TwitterDark />} 
                        {isDark ? <YouTubeLight /> : <YouTubeDark />} 

                    </div>
                </div>
            </div>
        </div>
    )
}