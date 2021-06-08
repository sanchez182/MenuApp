import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
//Components
import { Toolbar, AppBar, IconButton, Typography, Grid, List, ListItem, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon, Language as LanguageIcon, Close as CloseIcon, AccountCircle as UserIcon } from '@material-ui/icons';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';
//Language
import { withTranslation } from 'react-i18next';
import i18n from '../../config/i18n';
import languageOptions from '../../config/languageOptions';
 /* import { logout } from '../../logout'; */
import { openCloseDrawer } from '../../store/actions/drawerActions';
//Actions
 
const StartAppBar = (props) => {
    const {  t } = props;
    const [lang, setLang] = useState(languageOptions[0]);
    const [openLang, setOpenLang] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    
  const { open } = useSelector((state) => state.drawerState); 

  const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        dispatch(openCloseDrawer(true));
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logoutMenu = () => {
        handleClose();
     //   logout();
    }

    const closeLanguage = () => {
        setOpenLang(false);
    }
    const openLanguage = () => {
        setOpenLang(true);
    }

    const changeLang = async (language) => {
        setLang(language);
        i18n.changeLanguage(language.value);
        closeLanguage();
    };
    return (
        <AppBar elevation={0} position='fixed' className={`appBar ${(open ? 'appBarShift' : '')}`}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={8} md={6} className="column-logo">
                            <IconButton
                                color='inherit'
                                aria-label='Menu'
                                onClick={handleDrawerOpen}
                                edge='start' 
                               className={`menuButton${(open ? ' hide' : '')}`} 
                            >
                                <MenuIcon />
                            </IconButton>
            
                        <Typography variant='h6' noWrap>
                            {t('header.title')}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={6} className="column-info">
                        <List className="menu">
                                <ListItem>
                                    <SpeedDial
                                        data-testid='speedDialId'
                                        id='speedDialId'
                                        ariaLabel="translate-selection"
                                        icon={<SpeedDialIcon icon={<LanguageIcon />} openIcon={<CloseIcon />} />}
                                        onClose={closeLanguage}
                                        onOpen={openLanguage}
                                        open={openLang}
                                        direction="down"
                                    >
                                        {languageOptions.map(action => (
                                            <SpeedDialAction
                                                data-testid='actionSpeed'
                                                className={action.value === lang.value ? 'active' : ''}
                                                key={action.value}
                                                icon={action.shortLabel}
                                                tooltipOpen
                                                tooltipTitle={t(action.label)}
                                                onClick={() => changeLang(action)}
                                            />
                                        ))}
                                    </SpeedDial>
                                </ListItem>
                
                            <ListItem>
                                <IconButton id="iconButton"  onClick={handleClick} color="inherit">
                                    <UserIcon />
                                </IconButton>
                                <Menu
                                    id="settings-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem  id="menuItem" onClick={logoutMenu}>
                                        {t("header.logout")}
                                    </MenuItem>
                                </Menu>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default withTranslation() (StartAppBar);