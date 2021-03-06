import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { 
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 140,
  },
});




export default function MediaCard ({ data, text, type, key_ }) {
  const classes = useStyles();

  const { img, title, description } = data


  return (
    <Card variant="outlined" width="100%" className={classes.root}>
      <CardActionArea>
        <Link to={"/"+type+"/"+key_}>
        <CardMedia
          className={classes.media}
          image={img} //math_b
          title="Contemplative Reptile"
          height={"300px"}
          zDepthShadows="none"
        />
      

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Get Tutor
        </Button>
        <Button size="small" color="primary">
          {text}
        </Button> */}
      </CardActions>
    </Card>
  );
}
