import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardItemMenu from '../components/CardItemMenu';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

interface MenuItem {
  plate: number;
}
export default function MenuItems({ plate }: MenuItem) {
  const classes = useStyles();

  const [state, setstate] = useState({
    plateName: "",
    cant: 0
  }) 

  const addPlate=(cant:number)=>{
    debugger
    const newValue = state.cant+cant
    newValue >= 0 && setstate({...state, cant: state.cant+cant})
  
  }

const color =  state.cant > 0 ? { backgroundColor: "lightgreen", marginTop: "4px" } : { marginTop: "4px"}
  return (
    
    <div className={classes.root}>
      <Accordion style={color}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container>
            <Grid item xs={9}>
              <Typography className={classes.heading}>Plato {plate} <br />
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Una descripcion pequeña...</Typography>

            </Grid>
            {state.cant > 0 && <Grid item xs={3}>
              <p>cant: {state.cant}</p>
            </Grid>}

          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <CardItemMenu addPlate={addPlate} cant={state.cant}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
