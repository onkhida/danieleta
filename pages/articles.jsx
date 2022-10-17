import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Articles.module.css'
import Navbar from '../components/Navbar/Navbar'
import Article from '../components/Article'

export default function Articles ({ isDark, handleSetOverlay, handleSetDarkTheme, articles }) {
    
    const demoText = articles[0].content.slice(0, 400)

    return (
        <div className={styles.articleswrapper}>
            <Navbar isDark={isDark} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />

            <div className={styles.wrap}>
                <h1 id={`${isDark ? "" : "black-txt"}`} >::articles</h1>
                <p id={`${isDark ? "" : "black-txt"}`} className={styles.about}>My days are frequently overwhelmed with fragmented thoughts and feelings that contain many different topics and ideas. As I attempt to draw fulfillment from the wonder that is human existence, I’ve made this simple markdown blog to try and piece my many thoughts together, and to document and challenge the emotions, feelings and concepts that stay with me as I dive into my human experience. </p>
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
                    {articles.map((article, index) => (
                        <Article 
                            key={index} 
                            isDark={isDark} 
                            img={article.frontmatter.cover_image}
                            reverseLink={article.slug}
                            date={article.frontmatter.date}
                            title={article.frontmatter.title}
                            preText={article.frontmatter.pretext}
                            readTime={article.frontmatter.reading_time}
                            tag={article.frontmatter.tag}
                            demoText={demoText}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('articles'))

    const articles = files.map(filename => {
        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(path.join('articles', filename), 'utf-8')

        const { data: frontmatter, content } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
            content,
        }
    }) 

    // console.log(articles)

    return {
        props: {
            articles: articles
        }
    }
}