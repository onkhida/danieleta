import styles from '../../styles/Article.module.css'
import Navbar from '../../components/Navbar/ArticleNavbar'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default function ArticlePage({ frontmatter: {title, date, cover_image, reading_time, tag, pretext}, slug, content, isDark, handleSetDarkTheme  }) {

    console.log(isDark)
    // 5624BF

    const tagColor = {
        color: `${isDark ? "#B490FF": "#5624BF"}`
    }

    const preTextColor = {
        color: `${isDark ? "rgb(213, 213, 213)": "rgb(103, 103, 103)"}`
    }

    return (
        <div className={styles.wrapper}>
            <Navbar date={date} reading_time={reading_time} isDark={isDark} toggleDark={handleSetDarkTheme} />
            <div className={styles.img}>
                <img src={`${cover_image}`} alt="" />
            </div>

            <div className={styles.title}>
                <p style={tagColor}>{tag}</p>
                <h1 id={`${isDark ? "" : "black-txt"}`}>{title}</h1>
                <p style={preTextColor} className={styles.pretext}>{pretext}</p>
            </div>

            <div id={`${isDark ? "" : "black-txt"}`} dangerouslySetInnerHTML={{__html: marked(content)}} className={styles.content}>   
            </div>

        </div>
    )
}









export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('articles'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: {slug} }) {
    const markdownWithMeta = fs.readFileSync(path.join('articles', slug + '.md'), 'utf-8')

    const { data:frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug, 
            content
        }
    }
}