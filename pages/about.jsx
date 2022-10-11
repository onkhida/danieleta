import styles from '../styles/About.module.css'
import Image from 'next/image'
import Link from 'next/link'
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
                        Hi there. My name is Daniel Eta, and I make a lot of software. Beyond my endless desire to <Link href="/work">create</Link> systems that solve contextual problems, I love to <Link href="/articles">write</Link>. A lot. I have a pretty simple markdown blog embedded into this site that I would love you to checkout whilst you are here. I’ve built it to house the fragmented thoughts and processes that pop up in my head all day. It is mostly software related content, but if you look hard enough you would find anything ranging from philosophy to even data science.
                            <br />
                            <br />
                        A big part of my personhood as well is chess. I play a good deal of it <Link href="https://www.chess.com/member/onyedikachiii">online</Link>, but besides the rush or dopamine that I get when the game goes in my favor, the 8x8 board has always represented the fact that endless bounds of creativity and opportunity will always present itself if we think hard enough about the decisions we have to make. It’s taught me to think deeply and take things one move at a time - dealing with my anxiety and allowing me to coordinate my pieces and win. Though the opening stages of my life are still being played, I am using these lessons to take things one move at a time, and to find the right permutations to bring about the outcomes that I so dearly envision. 
                            <br />
                            <br />
                        Most of my time these days is spent building <Link href="">Hourglass</Link> and <Link href="">Pally</Link>. My first two SaaS that have come from two big issues I encounter in my daily workflow.
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