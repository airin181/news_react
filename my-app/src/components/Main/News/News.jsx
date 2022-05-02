import React, { Component } from "react";
import Card from './Card/Card';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';




class News extends Component {
  

  constructor(props) {
    super(props)

   this.state = {
      newsList: "",
    } 

  }

/*   handleSearch = (event) =>{
  
    event.preventDefault();
    const topic = event.target.search.value.toLowerCase()
    console.log('topic:',topic);
    return topic
  
  } */

  async componentDidMount(event) {

      const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.handleSearch}&api-key=${process.env.REACT_APP_API_KEY}`)

      const data = response.data;
      const selectedData = data.response.docs.slice(0 - 5)

      const selectedNews = selectedData.map(news => {
          return {
              headline: news.headline.main,
              abstract: news.abstract,
              author: news.byline.original,
              date: news.pub_date,
              url: news.web_url
          }
      })

        this.setState({newsList: selectedNews})           
  }

  removeCard = (i) => {
  const remainingNews = this.state.newsList.filter((news, j)=> i!== j);
  this.setState({newsList: remainingNews});
}



  render() {
    const newsCreated = this.props.value.newsForm; //array de obj
    console.log('newsCreated en NEWS: ', newsCreated);
    const allNews = [...newsCreated, ...this.state.newsList] //método spread para pasar de array a obj
    console.log('allNews en NEWS: ', allNews);
   
   // console.log(data); 

    return (
      <>
         <h1>Be in tune with the latest news!</h1>
  {/*       <form onSubmit={(event) =>handleSearch(event)}>
          <label htmlFor="search"></label>
          <input type="text" name="search"/>
          <input type="submit" value="Search"/>
         </form>  */}
         <section>
           {
           allNews.map((news, i) => <Card news={news} key={uuidv4()} remove={() => this.removeCard(i)}/>)
           }
         </section>

      </>
      )
  }
}

export default News;

