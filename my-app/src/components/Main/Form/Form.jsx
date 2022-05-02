import React, { Component } from "react";
import { Link } from "react-router-dom";

/* import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; */

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

    return (
    <div>

      <h1>Register a publication</h1>
      <form onSubmit={this.saveNews} className="form">

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
        <Link to="/news">Take me to News</Link>
       </form>

       


  {/*       <h1>Register a publication</h1>
        <div className="form">
        <TextField id="outlined-basic" label="Headline:" variant="outlined" name='headline' v/>
        <TextField id="outlined-basic" label="Author:" variant="outlined" name='author'/>
        <TextField id="outlined-basic" label="Abstract:" variant="outlined" name='abstract'/>
        <TextField id="outlined-basic" label="Date:" variant="outlined" name='date'/>
        <TextField id="outlined-basic" label="URL post" variant="outlined" name='url'/>
    
        <Button variant="contained" type="submit" className="Button" sx={{margin:1}} onClick={this.saveNews}>Save</Button>
        <Link to="/news">Take me to News</Link>

        </div> */}
    </div>)
  }
}

export default Form;