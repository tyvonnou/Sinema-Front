import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CardContent from "@material-ui/core/CardContent";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import Hidden from '@material-ui/core/Hidden';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    list: {
      width: 250
    },
    card: {
      paddingBottom: theme.spacing(1)
    },
    title: {
      fontWeight: 600
    }
  })
);

function SliderMenu(props: WithWidth) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function ListItemLink(props: any) {
    const { icon, primary, to } = props;

    return (
      <li>
        <ListItem button component={props => <RouterLink to={to} {...props} />}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary}></ListItemText>
        </ListItem>
      </li>
    );
  }

  function handleDrawerToggle() {
    setOpen(!open);
  }

  const drawer = (
    <div>
      <CardContent className={classes.card}>
        <Typography component="h5" variant="h5">
          Projet SI
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Application web de formations
        </Typography>
      </CardContent>
      <Divider />
      <List
        className={classes.list}
        onClick={handleDrawerToggle}
        aria-labelledby="list-subheader-navigation"
        subheader={
          <ListSubheader component="div" id="list-subheader-navigation">
            Navigation
          </ListSubheader>
        }
      >
        <ListItemLink icon={<HomeIcon />} primary="Accueil" to="/" />
        <ListItemLink
          icon={<AppsIcon />}
          primary="Formations"
          to="/fomations"
        />
        <ListItemLink
          icon={<GroupIcon />}
          primary="Nous rejoindre"
          to="/rejoindre"
        />
      </List>
      <Divider />
      <List
        className={classes.list}
        onClick={handleDrawerToggle}
        aria-labelledby="list-subheader-connection"
        subheader={
          <ListSubheader component="div" id="list-subheader-connection">
            Connexion
          </ListSubheader>
        }
      >
        <ListItemLink
          icon={<ExitToAppIcon />}
          primary="Se connecter"
          to="/connexion"
        />
        <ListItemLink
          icon={<PersonAddOutlinedIcon />}
          primary="S'inscrire"
          to="/inscription"
        />
      </List>
    </div>
  );

  return (
    <div>
      <Hidden mdUp>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Drawer open={open} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </div>
  );
}

export default withWidth()(SliderMenu);