import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

/* import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; */

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      send:false
   }

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

    onClick = () => this.setState({send:true})

  render() {

    return (
    <div>

      <h1>Register a new publication</h1>
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

        <Button variant="contained" color="primary" type="submit" onClick={this.onClick}>
          Save
        </Button>
       
        
        <Button component={Link} to="/news" variant="contained" color="inherit" type="submit" >
        Take me to News
        </Button>
        </div>
        {this.state.send?<Stack><Alert severity="success">Publication saved!</Alert>
        </Stack>:""}

        
      </form>
      </div>

    </div>)
  }
}

export default Form;