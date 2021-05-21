import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { RootState } from '../store';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import MenuItems from './MenuItems';
import ButtonDial from '../components/ButtonDial';
import SelectItem from '../components/SelectItem';
import { useSelector } from 'react-redux';
import { IModelDrinks, IModelFood, ITimeFood } from '../interfaces/IModelMenuItem';
import { Grid } from '@material-ui/core';
import { drinkTypeList, foodTypeList, timeFoodTypeList } from './temporalData';
import MultiSelect from '../components/MultiSelect';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MenuComponent() {
  const classes = useStyles();


  const { items } = useSelector((state: RootState) => state.menuItemReducer);


  const [value, setValue] = React.useState(0);
  const [drinkType, setDrinkType] = React.useState(null);
  const [foodType, setFoodType] = React.useState(null);
 // const [foodTime, setFoodTime] = React.useState(null);

  const [foodTime, setFoodTime] = React.useState<ITimeFood[]>([]);
/*   const [selected, setSelected] = React.useState([
    { id: 1, label: "Oliver Hansen" },
    { id: 2, label: "Van Henry" }
  ]); */
  const setDrink = (event: any) => {
    setDrinkType(event.target.value)
  }

  const setFood = (event: any) => {
    setFoodType(event.target.value)
  }

  const setTimeFood = (event: React.ChangeEvent<{ value: unknown }>) => {
    debugger
    setFoodTime(event.target.value as ITimeFood[]);
    
  };


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const renderFoodByFilters=()=>{
 /*    foodType ?   items.food.filter((x: IModelFood) => x.idFoodType === foodType).map((item: IModelFood) => {
      return <MenuItems item={item} itemType="food" itemName={item.plateName} key={item.id} />

    }) */
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">

          <Tab label="Platillos" icon={<LocalDiningIcon />} {...a11yProps(0)} />
          <Tab label="Bebidas" icon={<LocalBarIcon />} {...a11yProps(1)} />
          <Tab label="Ofertas/Combos" icon={<FastfoodIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container justify="flex-end">
          
          <MultiSelect renderItems={foodTime}
            items={timeFoodTypeList}
            setItemValue={setTimeFood}
            idItemType="idTimeFood"
            itemName="timeFoodName"
            placeHolder="Filtrar por tiempo de comida"/>

     {/*      <SelectItem idItem={foodType}
            items={foodTypeList}
            setItemValue={setTimeFood}
            idItemType="idFoodType"
            itemName="foodName"
            placeHolder="Filtrar por tipo de comida"
          /> */}
    {/*       <SelectItem idItem={foodTime}
            items={timeFoodTypeList}
            setItemValue={setFood}
            idItemType="idFoodTime"
            itemName="timeFoodName"
            placeHolder="Filtrar por tiempo de comida"
          /> */}
        </Grid>
        { items.food.filter((x: IModelFood) => x.idFoodType === foodType).map((item: IModelFood) => {
                  return <MenuItems item={item} itemType="food" itemName={item.plateName} key={item.id} />

         }) 
        }

      </TabPanel>
      <TabPanel value={value} index={1}>

        <Grid container justify="flex-end">
          <SelectItem idItem={drinkType}
            items={drinkTypeList}
            setItemValue={setDrink}
            idItemType="idDrinkType"
            itemName="drinkName"
            placeHolder="Filtrar por tipo de bebida"
          />
        </Grid>
        {
          !drinkType ? items.drink.map((item: IModelDrinks) => {
            return <MenuItems item={item} itemType="drink" key={item.id}
              itemName={item.drinkName} />
          })
            :
            items.drink.filter((x: IModelDrinks) => x.idDrinkType === drinkType).map((item: IModelDrinks) => {
              return <MenuItems item={item} itemType="drink" key={item.id}
                itemName={item.drinkName} />
            })
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <ButtonDial />
    </div>
  );
}

