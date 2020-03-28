import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import '../../../App.css';
import wahyu from '../../../assets/img/wahyu.jpeg';
import silda from '../../../assets/img/silda.jpeg';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ImageAvatar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar style={{width: 200, height:200}} className="App-logo" alt="Wahyu Fatur Rizki" src={wahyu} />
      <Avatar style={{width: 200, height:200}} className="App-logo" alt="Wahyu Fatur Rizki" src={silda} />
    </div>
  )
}

export default ImageAvatar;
