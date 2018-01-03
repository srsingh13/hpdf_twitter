//import required modules
import React, { Component } from 'react';
import {View, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Text, Title, Fab, Tab, Tabs, List, ListItem, TabHeading, Card, CardItem, Thumbnail } from 'native-base';
import Icon from'react-native-vector-icons/FontAwesome';
import AppFooter from '../../components/appFooter';
import App from '../../../App';
//define the home tab on main screen
export default class Notification extends Component {
   
static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
      <Icon name='bell-o' style={{color: tintColor, fontSize: 20}} />
    ),
 } 
 
   state = {
    isReady: false,
  };
  async componentWillMount() {
    await Expo.Font.loadAsync({
     'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ isReady: true });
  }
 render() {
  const { navigation } = this.props;
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
      }

  
    
    return (
      <Container>
        <Content>
		<Text style={{fontSize:30 , paddingTop:140, paddingLeft:60 , color:'#657786'}}>Nothing to see yet</Text>
		
         </Content>	
		 
		
		 <AppFooter/>
	  </Container>
     );
  }
}
