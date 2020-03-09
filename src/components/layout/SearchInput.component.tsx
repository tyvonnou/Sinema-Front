import React from "react";
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%'
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      
    },
    inputRoot: {
      color: 'inherit',
      fontStyle: 'italic'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
  }),
);

export default function SearchInput() {
  const classes = useStyles();
  const [search, setSearch] = React.useState('');
  const [hoverColor, setHoverColor] = React.useState({color: '#acacac'});
  const [focus, setFocus] = React.useState(false);

  const handleHoverOn = () => {
    const colorOn = {color: '#000000'};
    if (!focus) {
      setHoverColor(colorOn);
    }
  };

  const handleHoverOff = () => {
    const colorOff = {color: '#acacac'};
    if (!focus) {
      setHoverColor(colorOff);
    }
  };

  const handleFocusOn = () => {
    const colorOn = {color: '#000000'};
    setFocus(true);
    setHoverColor(colorOn);
  };

  const handleFocusOff = () => {
    const colorOff = {color: '#acacac'};

    if (search === '') {
      setFocus(false);
      setHoverColor(colorOff);
    }
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSearch(event.target.value); 
  };

  return (
    <div className={classes.root}>
      <div className={classes.search} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
        <div className={classes.searchIcon} style={hoverColor}>
          <SearchIcon />
        </div>
        <InputBase placeholder="Rechercher un film" onFocus={handleFocusOn} onBlur={handleFocusOff} onChange={handleChangeSearch} classes={{root: classes.inputRoot, input: classes.inputInput}} inputProps={{ 'aria-label': 'search' }} />
      </div>
    </div>
  );
}
