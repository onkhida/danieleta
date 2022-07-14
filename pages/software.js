import styles from "../styles/Software.module.css"
import Project from '../components/Project'
import Footer from '../components/Footer'
import Work from '../components/Work'
import alcg from '../public/alcg.png'
import dot from '../public/dot.png'
import commerce from '../public/commerce.png'
import danieleta from '../public/deta.png'
import riyadha from '../public/riyadha.png'

export default function Software({ isDark }) {
    return (

        
        <>
            <div id={`${isDark ? "" : "black-txt"}`} className={styles.topwrap}>
                <h1 className={styles.title}>Software</h1>
                <h3 className={styles.subtext}>Anything I’ve written with code - ranging from pygame to more complex fullstack web applications</h3>
            </div>

            <div className={styles.projectcontainer}>
                <div className={styles.projects}>
                    <Project 
                        styles={styles} 
                        source={alcg} 
                        name="African Leadership Consulting Group"
                        about=""
                        tags={["next", "react", "netlify"]}
                        isDark={isDark}
                    />

                    <Project 
                        styles={styles} 
                        source={commerce} 
                        name="Commerce.co"
                        about="Final entrepreneurial project at ALA. Created a commercial website as a platform for folks in the ALA Economy to buy products and services from enterprises on campus. "
                        tags={["python", "django"]}
                        isDark={isDark}
                    />

                    <Project 
                        styles={styles} 
                        source={dot} 
                        name="Dot"
                        about="Landing page for the Dot Startup. Dot is an all-in-one financial service to students on the African Continent."
                        tags={["html", "css", "netlify"]}
                        isDark={isDark}
                    />

                    <Project 
                        styles={styles} 
                        source={danieleta} 
                        name="Daniel Eta"
                        about="Portfolio site I built with Next"
                        tags={["next", "react", "vercel"]}
                        isDark={isDark}
                    />

                    <Project 
                        styles={styles} 
                        source={riyadha} 
                        name="Riyadha"
                        about="Archival site to handle sports data on campus"
                        tags={["next", "django", "rest"]}
                        isDark={isDark}
                    />
                    
                </div>

                <div className={styles.skills}>
                    <h3>Professional Experience</h3>


                </div>
            </div>

            <Footer isDark={isDark} />

        </>
    )

}