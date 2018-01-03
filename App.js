import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Expo,{Font,AppLoading} from 'expo';
import {TabNavigator,DrawerNavigator, StackNavigator} from 'react-navigation';

import Home from './src/Screens/Main/Home'
import Notification from './src/Screens/Main/Notification'
import Search from './src/Screens/Main/Search'
import Message from './src/Screens/Main/Message'

import SideBar from './src/Screens/Drawer/SideBar'; 
import Profile from './src/Screens/Drawer/Profile';
import Lists from './src/Screens/Drawer/Lists';
import Moments from './src/Screens/Drawer/Moments';
import Highlights from './src/Screens/Drawer/Highlights'
import SettingsAndPrivacy from './src/Screens/Drawer/SettingsAndPrivacy';
import HelpCenter from './src/Screens/Drawer/HelpCenter';

import NewSearchScreen from './src/Screens/new/searchScreen';

import TabBarHeaders from './src/components/tabBarHeaders';
import AppHeader from './src/components/appHeader';
import DrawerHeader from './src/components/drawerHeader';
import SearchBar from './src/components/searchBar';

var MainScreenNavigator = TabNavigator({
	Home : {screen:Home},
	Search : {screen:Search},
	Notification : {screen:Notification},
    Message : {screen:Message}
	},
{  tabBarComponent: props => (<TabBarHeaders{...props} />),
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
  activeTintColor: '#1DA1F2',
  inactiveTintColor: '#657786',
  showIcon: true,
  showLabel: false,
  style: {
			backgroundColor: '#ffffff',
		
		},
  indicatorStyle:{
    backgroundColor:'#1DA1F2'
  },
  },
  navigationOptions: {
  	  showHeader : true,
  }

});

MainScreenNavigator.navigationOptions = {
	title: 'tab'
};

const LeftNavigationDrawer = DrawerNavigator({
    Main: {
	screen: MainScreenNavigator},
	Profile: { screen: Profile},
    Lists: { screen: Lists },
    Moments: { screen: Moments },
    Highlights: { screen: Highlights },
    SettingsAndPrivacy: { screen: SettingsAndPrivacy },
    HelpCenter: { screen: HelpCenter },
    NewSearchScreen: { screen: NewSearchScreen }
  },
  {
 contentComponent: props => (<SideBar {...props}  />),
  },
);






export default LeftNavigationDrawer;