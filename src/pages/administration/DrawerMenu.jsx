import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { openCloseDrawer } from '../../store/actions/drawerActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';



export const DrawerMenu = ()=> {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.drawerState);
  const isOpen = open ? "drawerOpen" : "drawerClose"

  const handleDrawerClose = () => {
    dispatch(openCloseDrawer(false));
  };

  const handleDrawerOpen = () => {
    dispatch(openCloseDrawer(true));
  };
  
  return (
    <Drawer
      variant="permanent"
      className={`drawer ${isOpen}`}
      classes={{paper: isOpen }}
    >
      <div className="toolbar justify-content-between">
        <Link to="/Home">
        <ListItem button >
            <ListItemIcon>
               <Home /></ListItemIcon>
            <ListItemText primary={"Homa"} />
          </ListItem>
        </Link>
        <IconButton color="inherit" data-testid="close-button" onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ?    <ChevronRightIcon/> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List onClick={handleDrawerOpen} >
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerMenu
