import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import DeckIcon from '@material-ui/icons/Deck';
interface TablesType {
    numberTable: number;
    isAvailable: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
}

const Tables = ({ numberTable, isAvailable }: TablesType) => {
    return (
        <Grid item xs={4} md={4} >
            <Card style={{backgroundColor:" #f1f1f196"}}>
                <CardActionArea>
                    <CardContent style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <DeckIcon fontSize={"large"}
                            color={isAvailable} />
                        <p 
                                style = {{
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

export default Tables;