
import React from 'react';
import {  Text, View ,Image,} from 'react-native';// it is coming in grey beacuse we have not used it
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import SearchScreen from './Screens/SearchScreen';
import TransactionScreen from './Screens/BookTransactionScreen';

export default class App extends React.Component {
  render(){   return <AppContainer/>;}
}

const TabNavigator= createBottomTabNavigator(
  {
    Transaction:{screen:TransactionScreen},
    Search:{screen:SearchScreen}
  },
  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:()=>{
       const routeName= navigation.state.routeName
       console.log(routeName);
       if(routeName=== "Transaction"){
         return(
           <Image
           style={{width:30,height:30}}
           source={require('./assets/book.png')}
           />

         )
       } else if(routeName=== "Search"){
         return(
           <Image 
           style={{width:30,height:30}}
           source={require('./assets/searchingbook.png')}
           
           />
         )

       }
      }
    })
  }
);
const AppContainer=createAppContainer(TabNavigator);
