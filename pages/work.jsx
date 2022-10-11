import styles from "../styles/Work.module.css"

import Project from "../components/Project/Project"
import ProjectData from '../components/Project/ProjectData'

import Navbar from '../components/Navbar/Navbar'


export default function Work({ isDark, handleSetOverlay, handleSetDarkTheme }) {

    return ( 
       <div className="work-wrapper">
        <Navbar isDark={isDark} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />

         <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 id={`${isDark ? "" : "black-txt"}`} >::work</h1>
                <p id={`${isDark ? "" : "black-txt"}`} className={styles.about}>I have an incessant need to build things. In fact, it’s a trait that I believe has been with me for as long as I can remember. The desire to constantly take a reflective look at my context and conjure up solutions that solve respective problems. Over the past few years, I’ve done quite a bit of work on many different things, but listed here are the specific one’s I am most proud of. Some of them are open source, so don’t hesitate to contribute on GitHub.</p>
            </div>

            <div className={styles.content}>
                {
                    ProjectData.map((project, index) => (
                        <Project 
                            key={index}
                            index={index}
                            img={project.img}
                            name={project.name}
                            show={project.show}
                            isDark={isDark}
                            description={project.description} 
                            link={project.link}
                        />                 
                    ))
                }
            </div>
        </div>
       </div>
    )

}