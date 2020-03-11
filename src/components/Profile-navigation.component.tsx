import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  appBar: {
      backgroundColor: 'transparent',
  },
  indicator: {
      color: theme.palette.common.white
  },
  tabText: {
      color: theme.palette.common.white,
      fontWeight: 900
  }
}));

export default function HeaderNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          classes={{indicator: classes.indicator}}
        >
          <Tab label="Accueil" disableRipple={true} className={classes.tabText} {...a11yProps(0)} />
          <Tab label="Mes favoris" disableRipple={true} className={classes.tabText} {...a11yProps(1)} />
          <Tab label="Mes notes" disableRipple={true} className={classes.tabText} {...a11yProps(2)} />
          <Tab label="Mes commentaires" disableRipple={true} className={classes.tabText} {...a11yProps(3)} />
          <Tab label="Mes recommendations" disableRipple={true} className={classes.tabText} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Accueil
      </TabPanel>
      <TabPanel value={value} index={1}>
        Mes favoris
      </TabPanel>
      <TabPanel value={value} index={2}>
        Mes notes
      </TabPanel>
      <TabPanel value={value} index={3}>
        Mes commentaires
      </TabPanel>
      <TabPanel value={value} index={4}>
        ¯\_(ツ)_/¯
      </TabPanel>
    </div>
  );
}