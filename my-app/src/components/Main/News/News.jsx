import React, { Component } from "react";
import Card from './Card';
import axios from 'axios'; 


class News extends Component {

  constructor(props) {
    super(props)

  /*   this.state = {
      newsList: []
    } */
  }
/* 
  async componentDidMount() {

    const apikey = process.env.APIKEY
    //Petición HTTP

    const resp = await axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apikey}`);
    const data = await resp.data;

    console.log(data);

    this.setState({
      newsList: data.results
    })
    console.log('componentDidMount');
  }
 */

  render() {
  /*   const { title, subtitle, body } = this.props.data;
    const paint = this.props.paint */
    return (
      <div>
        <h1>News</h1>
         {/* {
          this.state.newsList.map(news =>
            <section>
              <p>{news.title}</p>
              <p>{news.subtitle}</p>
              <p>{news.body}</p>
            </section>
          )
        }  */}
      </div>

    )
  }
}

export default News;
