import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 360,
    maxHeight: 360,
    marginTop: '15px',
    marginBottom: '15px'
  },
});

const truncate = (str) => {
  return str.length > 80 ? str.substr(0, 80 - 1) + "..." : str
}

function NewsCard({title, image, description, content, source, openModal}) {
  const classes = useStyles();

  const handleClick = () => {
    openModal(title, content, image, source)
  }
  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={title}
          onClick={handleClick}
        />
        <CardContent onClick={handleClick}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {truncate(description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" 
                color="primary"
                onClick={handleClick}
                >
          Read More
        </Button>
      </CardActions>
    </Card>
    </>
  );
}

export default NewsCard