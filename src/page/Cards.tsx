import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box,Typography } from '@mui/material';
import DrawerAppBar from '../component/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CARDS_QUERY = gql`
query{
  getAllCard{
    question
    answer
  }
}`
const Cards = () => {
 const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { data } = useQuery(CARDS_QUERY);
  return (
    <div>
       <DrawerAppBar/>
     <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          margin: '100px 20px',
          background: 'F8F9FA',
          justifyContent: 'space-evenly',
        }}>
           {data && (
        <>
          {data.getAllCard.map((card:any) => (
<Card className={classes.root}>
      <CardHeader/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {card.question}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Answer:</Typography>
          <Typography paragraph>
           {card.answer}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      ))}
        </>
      )}
</Box> 
    </div>
  );
};
export default  Cards