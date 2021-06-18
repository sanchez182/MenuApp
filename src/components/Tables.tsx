import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import DeckIcon from '@material-ui/icons/Deck'; 
import { withRouter, RouteComponentProps } from "react-router-dom";
interface TablesType extends RouteComponentProps<any> {
    numberTable: number;
    isAvailable: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
    setSelectedTable: (arg0:String)=> void;
}

const Tables = ({ numberTable, isAvailable ,setSelectedTable}: TablesType) => {
 
    return ( 
                <Grid item xs={4} md={4} >
                    <Card style={{ backgroundColor: " #f1f1f196" }} >
                        <CardActionArea>
                            <CardContent
                                id={numberTable.toString()}
                                onClick={(e) => setSelectedTable(e.currentTarget.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                <DeckIcon fontSize={"large"}
                                    color={isAvailable} />
                                <p
                                    style={{
                                        marginLeft: "16px",
                                        marginTop: "8px"
                                    }}
                                > #{numberTable}</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid> 
    );
}

export default withRouter(Tables);
