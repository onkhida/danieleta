import styles from "../styles/Work.module.css"
import ProjectBuild from "../components/ProjectBuild"
import Navbar from '../components/Navbar/Navbar'

import de from '../public/project/de.png'
import hourglass from '../public/project/hourglass.png'
import learnr from '../public/project/learnr.png'
import dot from '../public/project/dot.png'
import bl from '../public/project/booleanlabs.png'
import commerce from '../public/project/commerce.png'

export default function Work({ isDark, handleSetOverlay, handleSetDarkTheme }) {

    console.log(isDark)

    return ( 
       <div className="work-wrapper">
        <Navbar isDark={isDark} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />

         <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 id={`${isDark ? "" : "black-txt"}`} >::work</h1>
                <p id={`${isDark ? "" : "black-txt"}`} >I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
            </div>

            <div className={styles.content}>
                <ProjectBuild 
                    img={de}
                    name="Daniel Eta" 
                    show={true}
                    isDark={isDark}
                    description="My personal portfolio website. Houses most of the work I do, and passion I put into my craft." 
                    link="https://github.com/danieldoteta/danieleta"
                />
                <ProjectBuild 
                    img={hourglass}
                    name="Hourglass Meetings" 
                    isDark={isDark}
                    show={true}
                    description="Hourglass is a meeting place for professionals with deadlines. A smart way to have more efficient, fruitful meetings." 
                    link="hourglass.app"
                />

                <ProjectBuild 
                    img={learnr}
                    name="Learnr" 
                    isDark={isDark}
                    show={true}
                    description="Educational website birthed from my passion to create content for the masses." 
                    link="hourglass.app"
                />
                <ProjectBuild 
                    img={dot}
                    name="Dot" 
                    isDark={isDark}
                    show={true}
                    description="Educational website birthed from my passion to create content for the masses." 
                    link="dotinc.app"
                />
                <ProjectBuild 
                    img={bl}
                    name="Boolean Labs" 
                    isDark={isDark}
                    show={true}
                    description="Educational website birthed from my passion to create content for the masses." 
                    link="booleanlabs.io"
                />
                <ProjectBuild 
                    img={commerce}
                    name="Commerce.co" 
                    isDark={isDark}
                    show={true}
                    description="Educational website birthed from my passion to create content for the masses." 
                    link="github.com"
                />
                {/* <ProjectBuild /> */}
            </div>

        </div>
       </div>
    )

}