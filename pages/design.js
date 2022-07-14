import styles from "../styles/Software.module.css"
import Footer from '../components/Footer'
import Image from 'next/image'

import afya from "../public/design/afyaconnect.png"
import alcg from "../public/design/alcg.png"
import alcgprice from "../public/design/alcgprice.png"
import dotsite from "../public/design/dotlanding.png"
import kukua from "../public/design/kukua.png"
import riyadha from "../public/design/riyadha.png"
import tablo from "../public/design/tablo.png"
import dotmobile from "../public/design/dotmobile.png"
import sportsprints from "../public/design/sportsprints.png"

export default function Design({ isDark }) {
    return ( 
        <>
            <div id={`${isDark ? "" : "black-txt"}`} className={styles.topwrap}>
                <h1 className={styles.title}>Design & UI</h1>
                <h3 className={styles.subtext}>
                    Just my random collection of images that have been part of my design process. Mainly mock-ups for sites, posters and apps.
                </h3>
            </div>

            <div className={styles.designcontainer}>
                <div className={styles.designimg}>
                    <Image 
                        src={afya} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.designimg}>
                    <Image 
                        src={alcg} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.designimg}>
                    <Image 
                        src={alcgprice} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.designimg}>
                    <Image 
                        src={dotsite} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.designimg}>
                    <Image 
                        src={kukua} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.designimg}>
                    <Image 
                        src={riyadha} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.designimg}>
                    <Image 
                        src={tablo} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.designimg}>
                    <Image 
                        src={dotmobile} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.designimg}>
                    <Image 
                        src={sportsprints} 
                        alt="design" 
                        width="300" 
                        height="200"
                        layout="responsive"
                    />
                </div>
            </div>

            <Footer isDark={isDark} />

        </>
    )

}