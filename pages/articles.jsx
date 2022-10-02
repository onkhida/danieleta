import styles from '../styles/Articles.module.css'
import Navbar from '../components/Navbar'
import Article from '../components/Article'

export default function Articles ({ isDark, handleSetOverlay, handleSetDarkTheme }) {
    return (
        <div className={styles.articleswrapper}>
            <Navbar isDark={isDark} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />

            <div className={styles.wrap}>
                <h1 id={`${isDark ? "" : "black-txt"}`} >::articles</h1>
                <p id={`${isDark ? "" : "black-txt"}`} className={styles.about}>I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
                <div className={styles.tags}>
                    <div className='active-tag'>ALL</div>
                    <div id={`${isDark ? "" : "black-txt"}`} >CHESS</div>
                    <div id={`${isDark ? "" : "black-txt"}`} >DATA SCIENCE</div>
                    <div id={`${isDark ? "" : "black-txt"}`} >ALGORITHMS</div>
                    <div id={`${isDark ? "" : "black-txt"}`} >WEB DEVELOPMENT</div>
                    <div id={`${isDark ? "" : "black-txt"}`} >PHILOSOPHY</div>
                </div>
                <hr />

                <div className={styles.posts}>
                    <Article isDark={isDark} />
                    <Article isDark={isDark}/>
                    <Article isDark={isDark} />
                </div>
            </div>
        </div>
    )
}