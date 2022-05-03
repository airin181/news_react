import React, { Component } from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

class CardNews extends Component {

  constructor(props) {
    super(props)
  
  }
  render() {
    const {headline,abstract,author,date,url} = this.props.news;
    console.log('this.props.news: ',this.props.news);
    //pasar image a string
    const img =  ("https://static01.nyt.com/").concat(this.props.news.image)

   
    return (
      
      <section className="card">
      <Card sx={{ width: 400, margin:1 }}> 
     
        <CardMedia component="img" height="140" image={img} alt="breaking news" className="bknews-img"/>

        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {headline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {abstract}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <b>Date:</b> {date}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <b>URL publication:</b> {url}
        </Typography>
        </CardContent>


        <CardActions>
        <Button onClick={this.props.remove} className="remove">Borrar</Button>
        </CardActions>
      </Card>

      </section>
   );
  }
}

export default CardNews;