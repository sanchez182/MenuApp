import { Grid } from '@material-ui/core';
import React, { FC, useState } from 'react'; 
import StartAppBarPublic from '../../components/Layout/StartAppBarPublic';
import { withRouter } from 'react-router-dom'; 
import MenuComponent from './MenuComponent';
import TableScreen from './TableScreen';
 

const TablesHome: FC = () => {
  //tableList
  const [selectedTable, setSelectedTable] = useState<any>(null)


  return (
    <Grid container className={"imgFond"}>
      <StartAppBarPublic />
      {selectedTable ?
        <MenuComponent selectedTable={selectedTable}/>
        :
        <TableScreen setSelectedTable={setSelectedTable}/>
      }
    </Grid>

  );
}

export default React.memo(withRouter(TablesHome));