import React, { Component } from 'react';
import {View, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Text, Title, Fab, Tab, Tabs, TabHeading, Card, CardItem, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import App from '../../../App';

export default class Message extends Component{

   static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="envelope-o" style={{color: tintColor, fontSize: 20}} />
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
		    <Card style={{flex:0}}>
			  <CardItem style={{backgroundColor:'#1DA1F2'}} cardBody>
			   
				<View style={{alignItems:'center' , justifyContent:'center', paddingTop:30 , paddingLeft:80, paddingBottom:10}}>
				
		          <Text  style={{color:'#FFFFFF', fontWeight:'bold'}}>Talk privately with anyone</Text>
				  <Text  style={{color:'#FFFFFF', fontWeight:'bold'}}>who follows you. Start by</Text>
				  <Text  style={{color:'#FFFFFF', fontWeight:'bold'}}>finding your friends.</Text>
                 
			   </View>
	          </CardItem>
			  
			  <CardItem style={{backgroundColor:'#1DA1F2'}} cardBody>
			    <View style={{alignItems:'center' , justifyContent:'center', paddingLeft:115 , paddingBottom:40 ,paddingTop:10}}>
				<Button light rounded >
				  <Text style={{color:'#1DA1F2', fontWeight:'bold'}}>Find friends</Text>
				</Button>
			     </View>
		      </CardItem>
			</Card>
		  </Content>
		   
		 
		
        </Container>
	);
  }
}
