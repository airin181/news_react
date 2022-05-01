import React, { Component } from "react";
import Card from './Card/Card';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

class News extends Component {
  

  constructor(props) {
    super(props)

   this.state = {
      newsList: [],
    } 

  }

  async componentDidMount() {

      const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=P0q0v3lJrsrUROozp6ZbynIJZP64wVkO'/*  + process.env.API_KEY */)

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

        this.setState({newsList: [selectedNews, ...this.props.newsCreated]})           
  }

  removeCard = (i) => {
  const remainingNews = this.state.newsList.filter((news, j)=> i!== j);
  this.setState({newsList: remainingNews});
}

  render() {
    const allNews = this.state.newsList

    return (
      <div>
         <h1>Be in tune with the latest news!</h1>
         <section>
           {
           allNews.map((news, i) => <Card news={news} key={uuidv4()} remove={() => this.removeCard(i)}/>)
           }

      </section>
      </div>

    )
  }
}

export default News;