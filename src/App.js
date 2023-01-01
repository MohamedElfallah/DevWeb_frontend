import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarR from './components/Navbar';
import Articles from './components/Articles'
import { useEffect, useState } from 'react';

function App() {
  
  const [articles, setArticles] = useState([])
  
  const fetchArticles = async (endpoint) => {
    const res = await fetch(endpoint,   {method : "GET",
    mode: 'cors',
    headers: {}
})
    const data = await res.json()

    return data
  }

  useEffect(()=>{
    const getArticles= async()=>{
      const resp = await fetchArticles("http://localhost:5000/api/articles/")
      setArticles(resp)
    }
    getArticles();
  },[])
  
  
  return (
    <Router>
   <NavbarR/>
   <Routes>
    <Route path='/' element={
      <Articles articles={articles} signup={false}/>
    }>
    </Route>

    <Route path='/freecodecamp' element={
      <Articles articles={articles.filter((article)=> article.source==='freecodecamp')} signup={false}/>
    }>
    </Route>
    <Route path='/medium' element={
      <Articles articles={articles.filter((article)=> article.source==='medium')} signup={false}/>
    }>
    </Route>
    <Route path='/udemy' element={
      <Articles articles={articles.filter((article)=> article.source==='udemy')} signup={false}/>
    }>
    </Route>
   </Routes>
    </Router>
  );
}

export default App;
