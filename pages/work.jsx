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
                <p id={`${isDark ? "" : "black-txt"}`} >I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
            </div>

            <div className={styles.content}>
                {
                    ProjectData.map((project, index) => (
                        <Project 
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