import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SaveIcon from '@material-ui/icons/Save';
import PanToolIcon from '@material-ui/icons/PanTool';
import KitchenIcon from '@material-ui/icons/Kitchen';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: 'fixed',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
    staticTooltipLabel: {
      width : 150,
    },
  }),
);

 

const actions = [
  { icon: <PanToolIcon />, name: 'hand', id:'hand', action: "Mesero" },
  { icon: <SaveIcon />, name: 'Save', id:'Save', action: "Pedir comida" },
  { icon: <KitchenIcon />, name: 'foodSeleted', id:'foodSeleted', action: "Items elegidos" },

  
];

export default function ButtonDial() {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };


  const actionEvent=(action: any)=>{
     debugger
     
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  return (
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={"up"}
        >
           {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              classes={classes}
              icon={action.icon}
              id={action.id}      
              tooltipTitle={action.action}
              tooltipOpen
              onClick={()=>actionEvent(action)}
            />
          ))} 
        </SpeedDial>
  );
}
