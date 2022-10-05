import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Head from 'next/head'

export default function ArticlePage({ frontmatter: {title, date, cover_image, reading_time, tag, pretext}, slug, content  }) {
    return (
        <div>
            <h1>{title}</h1>
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

    // console.log(paths)

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