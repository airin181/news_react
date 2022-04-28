import React, { Component } from "react";
/* import News from '../News/News' */
class Form extends Component {

/* 
  constructor(props) {
    super(props)

    this.state = {
      news: [],
    }

    }
  
    saveNews = (event) => {
  
      event.preventDefault(); //esto para el formulario para leer los inputs
      
        const title = event.target.title.value
        const subtitle= event.target.subtitle.value
        const body = event.target.body.value

        const newNews = {title,subtitle,body}
    
        this.setState({news: [...this.state.news, newNews]})

      console.log('c.log de newNews ',newNews);
    }

    paintNews = () => {
      return this.state.news.map((oneNews, i)=><News data={oneNews} key = {i}/>)
    } */





  render() {
   

    return (<div>

     {/*  <h1>Formulario</h1>
      <form onSubmit={this.saveNews}>
        <label htmlFor="title">Titular:</label> <br />
        <input type="text" name="title"id="title"/> <br />
        <label htmlFor="subtitle">Subtitular:</label> <br />
        <input type="text" name="subtitle"id="subtitle"/> <br />
        <label htmlFor="body">Cuerpo de noticia:</label> <br />
        <input type="textarea" name="body"id="body"/> <br />

        <input type="submit" value="Enviar"/> 
       </form>

       {this.paintNews()} */}
       

    </div>)
  }
}

export default Form;