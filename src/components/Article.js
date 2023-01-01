import {TiBookmark} from 'react-icons/ti'
const Article = ({title, link, description, source}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="data-card">
        <h3>{title}</h3>
        <h4>{source}</h4>
        <p>{description}</p>
        <span className="link-text">
          Read Articles
        </span>
        <TiBookmark style={{color : "red", cursor: 'pointer', fontSize: 30, float: 'right' }}/>
        </a>
    )
} 
export default Article;