import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

      <h1>Register a new publication</h1>
{/*       <form onSubmit={this.saveNews} className="form">

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
       </form> */}

       


      <div className="App">
      <form onSubmit={this.saveNews} className="form">
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="Headline"
          variant="outlined"
          name="headline"
        />
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="Author"
          variant="outlined"
          name="author"
        />
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="text"
          label="URL"
          variant="outlined"
          name="url"
        />
   
        <TextField
          style={{ width: "300px", margin: "5px" }}
          type="date"
          label=""
          variant="outlined"
          name="date"
        />
        <TextField
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Abstract"
          name="abstract"
          variant="outlined"
          multiline
          rows={10}
        />
        <br />
        <div className="div-btn-form">

        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
        <Button component={Link} to="/news" variant="contained" color="inherit" type="submit">
        Take me to News
        </Button>

        </div>
       

       {/*  <Button component={Link} to="/about" variant="contained" color="primary">
      About Page
      </Button>
        <Link to="/news">Take me to News</Link> */}
      </form>
      </div>



    </div>)
  }
}

export default Form;