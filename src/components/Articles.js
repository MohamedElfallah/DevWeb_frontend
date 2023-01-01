import Article from "./Article"

const Articles = ({articles}) => {
return (
    <main className="main-content">

        <div className="container">
            {articles.map((article)=> 
                <Article key={article.id} title={article.title} source={article.source} link={article.link} description={article.description}/>
            )}

        </div>

    </main>
)
}

export default Articles;