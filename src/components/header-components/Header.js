import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBar, UserAvatar, MenuDrawer } from './index';
import { headerHeight } from '../../styling/styling-vars';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    height: `${headerHeight}px`,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  cardCoven: {
    [theme.breakpoints.down('xs')]: {
      color: 'white'
    },
    [theme.breakpoints.up('sm')]: {
      color: 'green'
    },
    [theme.breakpoints.up('md')]: {
      color: 'yellow'
    },
    [theme.breakpoints.up('lg')]: {
      color: 'pink'
    },
    [theme.breakpoints.up('xl')]: {
      color: 'orange'
    },
    flexGrow: 0
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <MenuDrawer />
      <Typography className={classes.cardCoven} variant="h2">
        Card Coven
      </Typography>
      <SearchBar />
      <UserAvatar /> 
    </AppBar>
  );
}
