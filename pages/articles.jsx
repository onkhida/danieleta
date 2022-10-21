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

    const handleSetArticleTag = (tag) => {
        setArticleTag(tag)
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

    console.log(allArticles.length > 0)

    return (
        <div className={styles.articleswrapper}>
            <Navbar isDark={isDark} toggleOverlay={ handleSetOverlay } toggleDark={ handleSetDarkTheme } />

            <div className={styles.wrap}>
                <h1 id={`${isDark ? "" : "black-txt"}`} >::articles</h1>
                <p id={`${isDark ? "" : "black-txt"}`} className={styles.about}>My days are frequently overwhelmed with fragmented thoughts and feelings that contain many different topics and ideas. As I attempt to draw fulfillment from the wonder that is human existence, I’ve made this simple markdown blog to try and piece my many thoughts together, and to document and challenge the emotions, feelings and concepts that stay with me as I dive into my human experience. </p>
                <div className={styles.tags}>
                    <div className={`${articleTag==="ALL" ? "active-tag" : ""}`} onClick={() => handleSetArticleTag("ALL")}>ALL</div>
                    <div className={`${articleTag==="CHESS" ? "active-tag" : ""}`} id={`${isDark ? "" : "black-txt"}`} onClick={() => handleSetArticleTag("CHESS")}>CHESS</div>
                    <div className={`${articleTag==="DATA SCIENCE" ? "active-tag" : ""}`} id={`${isDark ? "" : "black-txt"}`} onClick={() => handleSetArticleTag("DATA SCIENCE")}>DATA SCIENCE</div>
                    <div className={`${articleTag==="ALGORITHMS" ? "active-tag" : ""}`} id={`${isDark ? "" : "black-txt"}`} onClick={() => handleSetArticleTag("ALGORITHMS")}>ALGORITHMS</div>
                    <div className={`${articleTag==="WEB DEVELOPMENT" ? "active-tag" : ""}`} id={`${isDark ? "" : "black-txt"}`} onClick={() => handleSetArticleTag("WEB DEVELOPMENT")}>WEB DEVELOPMENT</div>
                    <div className={`${articleTag==="PHILOSOPHY" ? "active-tag" : ""}`} id={`${isDark ? "" : "black-txt"}`} onClick={() => handleSetArticleTag("PHILOSOPHY")}>PHILOSOPHY</div>
                </div>
                <hr />

                <div className={styles.posts}>

                    {allArticles.length > 0 ? <HasArticles isDark={isDark} allArticles={allArticles} /> : <NoArticles />}

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