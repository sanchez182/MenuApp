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
import { IFoodType, IModelDrinks, IModelFood, ITimeFood } from '../interfaces/IModelMenuItem';
import { Checkbox, Grid } from '@material-ui/core';
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
  const [foodType, setFoodType] = React.useState<IFoodType[]>([]);
  const [foodTypeDisabled, setFoodTypeDisabled] = React.useState<boolean>(false);
  const [foodTime, setFoodTime] = React.useState<ITimeFood[]>([]);
  const [foodTimeDisabled, setFoodTimeDisabled] = React.useState<boolean>(false);

  const setDrink = (event: any) => {
    setDrinkType(event.target.value)
  }


  const setTimeFood = (event: React.ChangeEvent<{ value: unknown }>) => {
    debugger
    setFoodTime(event.target.value as ITimeFood[]);

  };

  const setFood = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFoodType(event.target.value as IFoodType[]);

  };

  const setDisabledFoodType = () => {
    setFoodTypeDisabled(!foodTypeDisabled)
    setFoodType([] as IFoodType[]);

  };

  const setDisabledFoodTime = () => {
    setFoodTimeDisabled(!foodTimeDisabled)
    setFoodTime([] as ITimeFood[]);

  };


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const renderFoodByFilters = () => {
    if (foodTime.length > 0 && foodType.length > 0) {

      let newFoodList: IModelFood[] = []
      let newFoodList2: IModelFood[] = []

      items.food.forEach(item => {
        foodTime.forEach(time => {
          if(item.idTimeFood === time.idTimeFood)
          newFoodList.push(item)
       });
     });

     newFoodList.forEach(item => {
      foodType.forEach(time => {
        if(item.idFoodType === time.idFoodType)
        newFoodList2.push(item)
     });
   });

      return  newFoodList2.map((item: IModelFood) => {
        return <MenuItems item={item} itemType="food" itemName={item.plateName} key={item.id} />
      })

    }else 
    if (foodTime.length > 0) {
      return foodTime.map((foodTime) => {
        return items.food.filter((x: IModelFood) => x.idTimeFood === foodTime.idTimeFood).map((item: IModelFood) => {
          return <MenuItems item={item} itemType="food" itemName={item.plateName} key={item.id} />
        })
      })
    }else

    if (foodType.length > 0) {
      return foodType.map((foodType) => {
        return items.food.filter((x: IModelFood) => x.idFoodType === foodType.idFoodType).map((item: IModelFood) => {
          return <MenuItems item={item} itemType="food" itemName={item.plateName} key={item.id} />
        })
      })
    }else{
       return items.food.map((item: IModelFood) => {
      return <MenuItems item={item} itemType="food" itemName={item.plateName} key={item.id} />
    })
    }
 

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

          <Grid item xs={12}>
            <MultiSelect renderItems={foodTime}
              items={timeFoodTypeList}
              setItemValue={setTimeFood}
              idItemType="idTimeFood"
              disabled={foodTimeDisabled}
              itemName="timeFoodName"
              placeHolder="Filtrar por tiempo de comida" />
            <Checkbox
              checked={!foodTimeDisabled}
              onChange={setDisabledFoodTime}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Grid>

          <Grid item xs={12}>
            <MultiSelect renderItems={foodType}
              items={foodTypeList}
              disabled={foodTypeDisabled}
              setItemValue={setFood}
              idItemType="idFoodType"
              itemName="foodName"
              placeHolder="Filtrar por tipo de comida" />
            <Checkbox
              checked={!foodTypeDisabled}
              onChange={setDisabledFoodType}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Grid>

          {renderFoodByFilters()}
    
        </Grid>


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

