import styles from '../../styles/Article.module.css'
import BackLight from './BackLight'
import BackDark from './BackDark'
import Sun from './ArticleSun'
import Moon from './ArticleMoon'

export default function ArticleNavbar({ isDark, toggleDark }) {

    const navStyles = {
        borderBottom: `${isDark ? "2px solid white" : "2px solid black"}`,

    }
    return (
        <div style={navStyles} className={styles.navbar}>
            {isDark ? <BackLight /> : <BackDark /> } 
            <div id={`${isDark ? "" : "black-txt"}`} className={styles.details}>
                OCT 5, 2022 • 10 MIN READ
            </div>
            <div onClick={toggleDark}>
                {isDark ? <Sun /> : <Moon /> } 
            </div>
        </div>
    )
}