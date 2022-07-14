import styles from "../styles/Software.module.css"
import Project from '../components/Project'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Pill from '../components/Pill'
import alcg from '../public/alcg.png'
import dot from '../public/dot.png'
import commerce from '../public/commerce.png'
import danieleta from '../public/deta.png'
import riyadha from '../public/riyadha.png'

export default function Software({ isDark }) {
    const skills = [
        "electron", "next", "django", "react", "numpy", "redis", "aws", "celery", "s3", "django-channels"
    ]

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

                <div id={`${isDark ? "" : "black-txt"}`} className={styles.skills}>
                    <h3>Professional Experience</h3>
                    <Work 
                        job="Tech Lead "
                        location="Cardinal Keys, Nigeria "
                        separator="at "
                        url="https://cardinalkeys.com"
                        description="Software company in Lagos, Nigeria that delivers world-class digital tools and solutions that ensure companies become more efficient, engaging and responsive."
                        isDark={isDark}
                    />

                    <Work 
                        job="Site Technician "
                        location="OAM, South Africa "
                        separator="at "
                        url="https://www.onceamonth.org.za"
                        description="Non-profit organization committed to empowering underprivileged refugee and asylum-seeking women in South Africa with access to period products and menstrual education."
                        isDark={isDark}
                    />

                    <Work 
                        job="Developer "
                        location="Dot "
                        separator="at "
                        url="https://dotinc.netlify.app"
                        description="An all-in-one financial service to students on the African Continent"
                        isDark={isDark}
                    />

                    <Work 
                        job="Web Developer "
                        location="ALCG "
                        separator="at "
                        url="https://www.alcg.co.za"
                        description="An organization that works to aid in the growth of small to medium-size businesses on the African continent through top-notch consulting."
                        isDark={isDark}
                    />

                    <h3 id={`${isDark ? "" : "black-txt"}`}>Skills and Packages</h3>
                    <div className={styles.pills}>
                        {
                            skills.map((skill, index) => (
                                <Pill styles={styles} name={skill} key={index} />
                            ))
                        }
                    </div>


                    

                </div>
            </div>

            <Footer isDark={isDark} />

        </>
    )

}