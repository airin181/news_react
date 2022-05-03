import React, { Component } from "react";
import Card from './Card/Card';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ph from "../../../assets/bknews.webp"

class News extends Component {
  

  constructor(props) {
    super(props)

   this.state = {
      newsList: "",
      value:"",
      
    } 

  }
  
  async componentDidMount() {
    
    
    try{
      
      /* const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.value}&api-key=${process.env.REACT_APP_API_KEY}`) */
      const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=politics&api-key=${process.env.REACT_APP_API_KEY}`)
        const data = response.data;
        
        const selectedData = data.response.docs.slice(0 - 5)        
        const selectedNews = selectedData.map(news => {
     
          return {
            image: news.multimedia[0].url,
            headline: news.headline.main,
            abstract: news.abstract,
            author: news.byline.original,
            date: news.pub_date,
            url: news.web_url
          }

        })
        
        this.setState({newsList: selectedNews})     

      } catch(error){
        throw error
      }  
  }


 /*  handleSearch = (event) =>{
      event.preventDefault();
      const topic = event.target.topic.value
      console.log(topic);
      this.setState({value: topic})
    
    }  */

  removeCard = (i) => {
  const remainingNews = this.state.newsList.filter((news, j)=> i!== j);
  this.setState({newsList: remainingNews});
}



  render() {
    const newsCreated = this.props.value.newsForm; //array de obj
    const allNews = [...newsCreated, ...this.state.newsList] //método spread para pasar de array a obj
   
   
   // console.log(data); 

    return (
      <>
         <h1>Stay tuned with the latest news!</h1>
         <figure className="div-bknews">
         <img src={ph} alt="breaking news" className="bknews"/>
         </figure>
         <section>
            {allNews.map((news, i) => <Card news={news} key={uuidv4()} remove={() => this.removeCard(i)}/>)}
          </section> 

     {/*    <form onSubmit={this.handleSearch}>
          <label htmlFor="topic"></label>
          <input type="text" name="topic"/>
          <input type="submit" value="Search"/>
        </form>  */}

         
      
    

      </>
      )
  }
}

export default News;

