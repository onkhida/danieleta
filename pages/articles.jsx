import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { useState } from 'react'

import styles from '../styles/Articles.module.css'
import Navbar from '../components/Navbar/Navbar'
import Article from '../components/Article'

import NoArticles from '../components/NoArticles'
import HasArticles from '../components/HasArticles'

export default function Articles ({ isDark, handleSetOverlay, handleSetDarkTheme, articles }) {
    const [articleTag, setArticleTag] = useState('ALL')

    const handleSetArticleTag = (e) => {
        setArticleTag(e.target.textContent)
    }
    
    let allArticles = []

    if (articleTag == "ALL") {
        allArticles = articles
    }

    else {
        allArticles = articles.filter((article) => {
            return article.frontmatter.tag == articleTag
        })
    }

    const tagColor = {
        color:  `${isDark ? "#FFFFFF" : "#000000"}`
    }

    return (
        <div className={styles.articleswrapper}>
            <Navbar isDark={isDark} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />

            <div className={styles.wrap}>
                <h1 id={`${isDark ? "" : "black-txt"}`} >::articles</h1>
                <p id={`${isDark ? "" : "black-txt"}`} className={styles.about}>My days are frequently overwhelmed with fragmented thoughts and feelings that contain many different topics and ideas. As I attempt to draw fulfillment from the wonder that is human existence, I’ve made this simple markdown blog to try and piece my many thoughts together, and to document and challenge the emotions, feelings and concepts that stay with me as I dive into my human experience. </p>
                <div className={styles.tags}>
                    <div id={`${articleTag==="ALL" ? "active-tag" : ""}`} className={`${isDark ? "" : "black-txt"}`} onClick={(e) => handleSetArticleTag(e)}>ALL</div>
                    <div id={`${articleTag==="CHESS" ? "active-tag" : ""}`} className={`${isDark ? "" : "black-txt"}`} onClick={(e) => handleSetArticleTag(e)}>CHESS</div>
                    <div id={`${articleTag==="DATA SCIENCE" ? "active-tag" : ""}`} className={`${isDark ? "" : "black-txt"}`} onClick={(e) => handleSetArticleTag(e)}>DATA SCIENCE</div>
                    <div id={`${articleTag==="ALGORITHMS" ? "active-tag" : ""}`} className={`${isDark ? "" : "black-txt"}`} onClick={(e) => handleSetArticleTag(e)}>ALGORITHMS</div>
                    <div id={`${articleTag==="WEB DEVELOPMENT" ? "active-tag" : ""}`} className={`${isDark ? "" : "black-txt"}`} onClick={(e) => handleSetArticleTag(e)}>WEB DEVELOPMENT</div>
                    <div id={`${articleTag==="PHILOSOPHY" ? "active-tag" : ""}`} className={`${isDark ? "" : "black-txt"}`} onClick={(e) => handleSetArticleTag(e)}>PHILOSOPHY</div>
                </div>
                <hr />

                <div className={styles.posts}>
                    {allArticles.length > 0 ? <HasArticles isDark={isDark} allArticles={allArticles} /> : <NoArticles isDark={isDark} />}
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