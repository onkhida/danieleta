import Article from "./Article"

export default function HasArticles({ allArticles, isDark }) {
  return (
    <>
        {
            allArticles.map((article, index) => (
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
                    demoText={article.content.slice(0, 400)}
                />
            ))
        }
    </>
  )
}
