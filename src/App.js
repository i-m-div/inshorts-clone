import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "./Data/config";
import NewsCont from "./components/NewsCont";
// import Footer from "./components/Footer";
// 109669396c6e4193a1b4aa37895bb242

function App() {
  const [category, setCategory] = useState('General')
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loader, setLoader] = useState(10)


  const newsApi = async () => {
    // const proxyUrl= "https://cors-anywhere.herokuapp.com/";
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${loader}`)
      // console.log(news);
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    newsApi() 
    // eslint-disable-next-line
  }, [newsResults, category, loader])


  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsCont newsArray={newsArray} newsResults={newsResults} loader={loader} setLoader={setLoader}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
