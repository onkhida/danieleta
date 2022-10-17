import styles from '../styles/Articles.module.css'
import Link from 'next/link'

export default function Article({ isDark, img, reverseLink, date, title, preText, readTime, tag, demoText }) {
    // console.log(img, reverseLink, date, title, preText, tag, readTime)

    const bgStyle = {
        background: `${isDark ? "rgba(49, 4, 146, 0.41)" : "#EEEEEE"}`
    }

    return (
        <Link href={`/article/${reverseLink}`}>
            <div style={bgStyle} className={styles.article}>
                <div className={styles.img}>
                    <img 
                        src={img}
                        alt={title}
                    />
                </div>

                <div className={styles.text}>
                    <small id={`${isDark ? "" : "black-txt"}`}>{date}</small>
                    <h1 id={`${isDark ? "" : "black-txt"}`}>{title}</h1>
                    <p id={`${isDark ? "" : "black-txt"}`}>
                        {`${demoText} [...]`}
                    </p>
                    <a href="#">{readTime}</a>
                </div>
            </div>
        </Link>
    )
}