import { Grid } from '@material-ui/core'; 
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

const DashboardMenu = () => {
/*   const { language } = useSelector((state: RootState) => state.lang);
 */
  return (
        <Grid   container >
          <p>Estamos en el dashboard</p>
          <Link to="/addPlate">UIr a add palte</Link>

        </Grid>
 
  );
}

export default DashboardMenu;