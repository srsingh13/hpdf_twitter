//import required modules
import React, { Component } from 'react';
import {View, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Text, Title, Fab, Tab, Tabs, List, ListItem, TabHeading, Card, CardItem, Thumbnail } from 'native-base';
import Icon from'react-native-vector-icons/FontAwesome';
import App from '../../../App';



//define the home tab on main screen
export default class Search extends Component {
 
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" style={{color: tintColor, fontSize: 20}} />
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
		<List>
            
			<ListItem itemHeader first>
              <Text style={{fontWeight:'bold',color:'#000000', fontSize:20}}>Trends for you</Text>
            
			</ListItem>
            
			<ListItem>
			 <View style={{flexDirection: "column"}}>
			 <View style={{flexDirection: "row"}}>
              <Text style={{color:'#657786'}}>1</Text><Text style={{paddingLeft:30}}>#1milli</Text>
			 </View>
			  <Text note style={{paddingLeft:40}}>9,838 tweets</Text>
             </View>
			</ListItem>

			<ListItem>
			 <View style={{flexDirection: "column"}}>
			 <View style={{flexDirection: "row"}}>
              <Text style={{color:'#657786'}}>2</Text><Text style={{paddingLeft:30}}>Rajpreet Singh</Text>
			 </View>
			  <Text note style={{paddingLeft:30}}>9,377 tweets</Text>
             </View>
			</ListItem>
		    
			<ListItem >
			 <View style={{flexDirection: "column"}}>
			 <View style={{flexDirection: "row"}}>
              <Text style={{color:'#657786'}}>3</Text><Text style={{paddingLeft:30}}>#Padmavati</Text>
			 </View>
			  <Text note style={{paddingLeft:30}}>8,728 tweets</Text>
             </View>
			</ListItem>
            
			<ListItem >
			 <View style={{flexDirection: "column"}}>
			 <View style={{flexDirection: "row"}}>
              <Text style={{color:'#657786'}}>4</Text><Text style={{paddingLeft:30}}>#HappyNewYear</Text>
			 </View>
			  <Text note style={{paddingLeft:20}}>7,018 tweets</Text>
             </View>
			</ListItem>
			
			<ListItem >
			 <View style={{flexDirection: "column"}}>
			 <View style={{flexDirection: "row"}}>
              <Text style={{color:'#657786'}}>5</Text><Text style={{paddingLeft:30}}>#Virushka</Text>
			 </View>
			  <Text note style={{paddingLeft:40}}>6,837 tweets</Text>
             </View>
			</ListItem>
		
		    <ListItem>
              <Text style={{color:'#1DA1F2'}}>Show more</Text>
            </ListItem>
         
          </List>
         </Content>	
		
		<Fab
           
            style={{ backgroundColor: '#1DA1F2' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="twitter" />
		 </Fab>
	  </Container>
     );
  }
}
