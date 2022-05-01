import React, { Component } from "react";

class Form extends Component {


  constructor(props) {
    super(props)

    }

    saveNews = (event) => {
  
      event.preventDefault(); //esto para el formulario para leer los inputs
        const title = event.target.title.value
        const subtitle= event.target.subtitle.value
        const body = event.target.body.value

        const newsForm = {title,subtitle,body}

        this.props.value(newsForm)

      this.paintNews()
      this.redirecting()
    }

   redirecting = () => { 
      window.location.href = "http://localhost:3000/news"
    }

    

  render() {

    return (<div>

      <h1>Register a publication</h1>
      <form onSubmit={this.saveNews}>
        <label htmlFor="title">Title:</label> <br />
        <input type="text" name="title"id="title"/> <br />
        <label htmlFor="subtitle">Subtitle:</label> <br />
        <input type="text" name="subtitle"id="subtitle"/> <br />
        <label htmlFor="body">Body of the piece:</label> <br />
        <input type="textarea" name="body"id="body"/> <br />

        <input type="submit" value="Enviar"/> 
       </form>

    </div>)
  }
}

export default Form;