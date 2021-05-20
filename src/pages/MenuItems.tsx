import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardItemMenu from '../components/CardItemMenu';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuItems } from '../store/actions/menuItemsActions';
import { IModelMenuItem } from '../interfaces/IModelMenuItem';
import { RootState } from '../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);
interface MenuItem {
  plate: IModelMenuItem;
}

export const  MenuItems = ({ plate }: MenuItem)=> {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.menuItemReducer);
  debugger


  const addPlate = (cant: number) => {
    const newValue = cant + plate.cant;
    let indexPlate = items.findIndex((x: IModelMenuItem) => x.idPlate == plate.idPlate)
    items[indexPlate].cant = newValue;
    newValue >= 0 && dispatch(setMenuItems(items));
  }

  const color = plate.cant > 0 ? { backgroundColor: "lightgreen", marginTop: "4px" } : { marginTop: "4px" }
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
              <Typography className={classes.heading}>{plate.plateName} <br />
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {plate.shortDdescription}</Typography>

            </Grid>
            {plate.cant > 0 && <Grid item xs={3}>
              <p>Cant: {plate.cant}</p>
            </Grid>}

          </Grid>
        </AccordionSummary>
        <AccordionDetails style={{    display: "block"}}>
          <CardItemMenu addPlate={addPlate} cant={plate.cant} plateName={plate.plateName} description={plate.description} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default MenuItems;