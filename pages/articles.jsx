import styles from '../styles/Articles.module.css'
import Navbar from '../components/Navbar'
import Article from '../components/Article'

export default function Articles ({ isDark, handleSetOverlay, handleSetDarkTheme }) {
    return (
        <div className={styles.articleswrapper}>
            <Navbar isDark={isDark} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />

            <div className={styles.wrap}>
                <h1 id={`${isDark ? "" : "black-txt"}`} >::articles</h1>
                <p id={`${isDark ? "" : "black-txt"}`} >I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
                <div className={styles.tags}>
                    <span className='active-tag'>ALL</span>
                    <span id={`${isDark ? "" : "black-txt"}`} >CHESS</span>
                    <span id={`${isDark ? "" : "black-txt"}`} >DATA SCIENCE</span>
                    <span id={`${isDark ? "" : "black-txt"}`} >WEB DEVELOPMENT</span>
                    <span id={`${isDark ? "" : "black-txt"}`} >ALGORITHMS</span>
                    <span id={`${isDark ? "" : "black-txt"}`} >PHILOSOPHY</span>
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