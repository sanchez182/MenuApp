import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Fab, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

interface ICardItemMenu {
  addPlate: (arg0:number)=> void;
  cant: number;
}

export default function CardItemMenu({ addPlate, cant }: ICardItemMenu) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        title="Shrimp and Chorizo Paella"
      />

      <CardMedia className={classes.media}
        image={require('../../src/assets/platillo1.jpg').default}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Aca va la descrión grande del platillo
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{justifyContent: "flex-end"}}>
        <strong  style={{marginRight: "8px"}}> {cant}</strong>
        <Tooltip title="Agregar plato" aria-label="Add">
        <Fab size="small" color="primary" onClick={()=>addPlate(1)} aria-label="add">
          <AddIcon /> 
        </Fab> 
        </Tooltip>
        <Tooltip title="Quitar plato" aria-label="remove">
        <Fab size="small" color="secondary"  style={{marginLeft: "6px"}} onClick={()=>addPlate(-1)} aria-label="add">
        <RemoveIcon />
        </Fab> 
        </Tooltip>
      </CardActions>
    </Card>
  );
}
