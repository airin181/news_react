import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {


  constructor(props) {
    super(props)

    }

    saveNews = (event) => {
  
      event.preventDefault(); //esto para el formulario para leer los inputs

        const newsForm = {        
          headline: event.target.headline.value,
          author: event.target.author.value,
          abstract: event.target.abstract.value,
          date: event.target.date.value,
          url: event.target.url.value
        }

        console.log('nueva noticia introducida: ',newsForm); //obj
        this.props.value(newsForm) // = saveNews(newsForm)
        
        
       
    }

  render() {

    return (<div>

      <h1>Register a publication</h1>
      <form onSubmit={this.saveNews}>

        <label htmlFor="headline">Headline:</label> <br />
        <input type="text" name="headline"id="headline"/> <br />

        <label htmlFor="author">Author:</label> <br />
        <input type="text" name="author"id="author"/> <br />

        <label htmlFor="abstract">Abstract:</label> <br />
        <input type="textarea" name="abstract"id="abstract"/> <br />

        <label htmlFor="date">Date:</label> <br />
        <input type="text" name="date"id="date"/> <br />

        <label htmlFor="url">URL:</label> <br />
        <input type="text" name="url"id="url"/> <br />

        <input type="submit" value="Enviar"/> 
       </form>

       <Link to="/news">Take me to News</Link>

    </div>)
  }
}

export default Form;