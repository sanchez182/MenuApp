import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import  { FC } from 'react';
import { useSelector } from 'react-redux';
import CropDinIcon from '@material-ui/icons/CropDin';
import Header from '../../components/Header'; 
import {withTranslation} from "react-i18next"
import { RootState } from '../../store';
import Tables from '../../components/Tables';
import StartAppBarPublic from './StartAppBarPublic';

const HomePage: FC = ({t}:any) => {
  const { language } = useSelector((state: RootState) => state.lang);
  return (
        <Grid container >
         <StartAppBarPublic/>
          

          <Grid container style={{marginTop: "158px"}} >
            <Grid item xs={6} md={6} >
              <Card style={{backgroundColor:"rgb(128 63 63 / 47%)"}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="body2"
                      color="textSecondary" component="p"
                      align="center">
                      <CropDinIcon color="error" />
                      <p>{t("busy",language)}</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={6} >
              <Card style={{backgroundColor:"rgb(128 63 63 / 47%)"}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"
                      align="center">
                      <CropDinIcon color="primary" />
                      <p>{t("available",language)}</p>  </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          
          <Grid container >
            <Tables numberTable ={1} isAvailable ="error" />
            <Tables numberTable ={2} isAvailable ="primary" />
            <Tables numberTable ={3} isAvailable ="primary" />
            <Tables numberTable ={4} isAvailable ="primary" />
            <Tables numberTable ={5} isAvailable ="error" />
            <Tables numberTable ={6} isAvailable ="primary" />
            <Tables numberTable ={7} isAvailable ="primary" />
            <Tables numberTable ={8} isAvailable ="error" />
            <Tables numberTable ={9} isAvailable ="primary" />
            <Tables numberTable ={10} isAvailable ="error" />
            <Tables numberTable ={11} isAvailable ="primary" />
            <Tables numberTable ={12} isAvailable ="error" />
            <Tables numberTable ={12} isAvailable ="error" />
            <Tables numberTable ={12} isAvailable ="error" />
            <Tables numberTable ={12} isAvailable ="error" />
            <Tables numberTable ={12} isAvailable ="error" />
            <Tables numberTable ={12} isAvailable ="error" />
            <Tables numberTable ={12} isAvailable ="error" />
            <Tables numberTable ={12} isAvailable ="error" />
            <Tables numberTable ={12} isAvailable ="error" />
    </Grid>
        </Grid>
 
  );
}

export default withTranslation() (HomePage);