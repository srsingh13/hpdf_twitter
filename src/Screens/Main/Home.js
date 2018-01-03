//import required modules
import React, { Component } from 'react';
import {View, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Text, Title, Fab, Tab, Tabs, TabHeading, Card, CardItem, Thumbnail } from 'native-base';
import Icon from'react-native-vector-icons/FontAwesome';


//import the tabs set for main screen
import MainScreenNavigator from '../../../App';
import App from '../../../App';

//define the home tab on main screen
export default class Home extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{color: tintColor, fontSize: 20}} />
  ), 
}

 constructor() {
   super();
   this.state = {
     active: true,
   };
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
		    <View style={{flexDirection: "row"}}>
		  	 
              <CardItem cardBody>
				<View style={{paddingBottom:240 , paddingLeft:10, width:80 }}>
				  <Thumbnail source={require('../../images/DP.jpg')}/>
			    </View>
	   		  </CardItem>
			  
			  <CardItem cardBody>
			    <View style={{flexDirection: "column" , width: 265,paddingTop:10}}>
                  
			       <View style={{flexDirection: "row"}}>
                    <Text style={{fontWeight:'bold'}}>Rajpreet Singh <Thumbnail source={require('../../images/tick.png')} /></Text><Text note> @srsingh_13 .8m     </Text><Icon name="angle-down" style={{color:'#657786' ,paddingTop:10, width:15, fontWeight:'bold'}}/>
				   </View>
			      
                    <Text>Finally the <Text style={{color:'#1DA1F2'}}>#blue</Text> tick and crossed 1 million  </Text><Icon name='hand-o-up'/>
					
			        <Image source={require('../../images/DP.jpg')} style={{height: 200, width: null, flex: 1, borderRadius:5, paddingTop:5}} />
		          
				  <CardItem cardBody>
				    <Left>
				      <View style={{flexDirection: "row",paddingTop:10 ,paddingBottom:10 }}>
                        
						<Button transparent small style={{alignItems:'flex-start', justifyContent:'flex-start',alignContent:'flex-start',width:65}}>
                         <Icon name="comment-o" style={{color:'#657786', fontSize: 20}} />
                         <Text style={{color:'#657786',fontSize: 13}}>34</Text>
                        </Button>
			        
					    <Button transparent  small style={{alignItems:'flex-start',justifyContent:'flex-start',width:65}}>
                         <Icon name="retweet" style={{color:'#657786', fontSize:20}}/>
                         <Text style={{color:'#657786',fontSize: 13}}>26</Text>
			            </Button>
			        
					    <Button transparent small style={{alignItems:'flex-start',justifyContent:'flex-start',width:65}}>
                         <Icon name="heart-o" style={{color:'#657786', fontSize: 20}}/>
                         <Text style={{color:'#657786',fontSize: 13}}>59</Text>
			            </Button>
			        
					    <Button transparent  small style={{alignItems:'flex-start',justifyContent:'flex-start',width:61}}>
                         <Icon name="envelope-o"style={{color:'#657786', fontSize: 20}} />
                        </Button>
			       
				      </View>
				    </Left>
				   </CardItem>
				 
			    </View>
			  </CardItem>
			 
			 </View>
		  </Card>
		    
		  <Card style={{flex:0, height:120}}>
		    <View style={{flexDirection: "row"}}>
		  	 
              <CardItem cardBody>
				<View style={{paddingBottom:120 , paddingLeft:10, width:80 }}>
				  <Thumbnail source={require('../../images/namo.jpg')}/>
			    </View>
			  </CardItem>
			  
			  <CardItem cardBody>
			    <View style={{flexDirection: "column" , width: 265 , paddingBottom:90}}>
                  
			       <View style={{flexDirection: "row"}}>
                    <Text style={{fontWeight:'bold'}}>Narendra Modi <Thumbnail source={require('../../images/tick.png')} /></Text><Text note> @narendramo.. .2m</Text><Icon name="angle-down" style={{color:'#657786' ,paddingTop:10, width:15, fontWeight:'bold'}}/>
				   </View>
			      
                    <Text>Congratulations <Text style={{color:'#1DA1F2'}}>@srsingh_13</Text>, ab <Text style={{color:'#1DA1F2'}}>#aadhar</Text> bhi link krvalo</Text>
					
			     <CardItem cardBody>
				   <Left>
				    <View style={{flexDirection: "row",paddingTop:10 ,paddingBottom:10 }}>
                     
					 <Button transparent small style={{alignItems:'flex-start', justifyContent:'flex-start',alignContent:'flex-start',width:65}}>
                      <Icon name="comment-o" style={{color:'#657786', fontSize: 20}} />
                      <Text style={{color:'#657786',fontSize: 13}}>46</Text>
                     </Button>
			        
					 <Button transparent  small style={{alignItems:'flex-start',justifyContent:'flex-start',width:65}}>
                      <Icon name="retweet" style={{color:'#657786', fontSize:20}}/>
                      <Text style={{color:'#657786',fontSize: 13}}>26</Text>
			         </Button>
			        
					 <Button transparent small style={{alignItems:'flex-start',justifyContent:'flex-start',width:65}}>
                      <Icon name="heart-o" style={{color:'#657786', fontSize: 20}}/>
                      <Text style={{color:'#657786',fontSize: 13}}>99</Text>
			         </Button>
			        
					 <Button transparent  small style={{alignItems:'flex-start',justifyContent:'flex-start',width:61}}>
                      <Icon name="envelope-o"style={{color:'#657786', fontSize: 20}} />
                     </Button>
			       
				    </View>
				   </Left>
				 </CardItem>
				 
			    </View>
			  </CardItem >
			 
			</View>
		  </Card>
		    
		  <Card style={{flex:0, height:150}}>
		   <View style={{flexDirection: "row"}}>
		  	 
             <CardItem cardBody>
	          <View style={{paddingBottom:200 , paddingLeft:10, width:80 }}>
				<Thumbnail source={require('../../images/Vk.jpg')}/>
			  </View>
		     </CardItem>
			  
			  <CardItem cardBody>
			    <View style={{flexDirection: "column" , width: 265 ,paddingBottom:130}}>
                  
			       <View style={{flexDirection: "row"}}>
                    <Text style={{fontWeight:'bold'}}>Virat Kohli  <Thumbnail source={require('../../images/tick.png')} /></Text><Text note> @imVkohli .5m                 </Text><Icon name="angle-down" style={{color:'#657786' ,paddingTop:10, width:15, fontWeight:'bold'}}/>
				   </View>
			      
                    <Text>Badelog<Text style={{color:'#1DA1F2'}}> @srsingh_13</Text> bhai ki shaadi mai bhi nhi aaya :-( </Text>
					<Text>Congratulations BTW ;-) </Text>
					
			       
		          <CardItem cardBody>
				  <Left>
				  <View style={{flexDirection: "row",paddingTop:10 ,paddingBottom:10 }}>
                    <Button transparent small style={{alignItems:'flex-start', justifyContent:'flex-start',alignContent:'flex-start',width:65}}>
                     <Icon name="comment-o" style={{color:'#657786', fontSize: 20}} />
                     <Text style={{color:'#657786',fontSize: 13}}>66</Text>
                    </Button>
			        <Button transparent  small style={{alignItems:'flex-start',justifyContent:'flex-start',width:65}}>
                     <Icon name="retweet" style={{color:'#657786', fontSize:20}}/>
                     <Text style={{color:'#657786',fontSize: 13}}>17</Text>
			        </Button>
			        <Button transparent small style={{alignItems:'flex-start',justifyContent:'flex-start',width:65}}>
                     <Icon name="heart-o" style={{color:'#657786', fontSize: 20}}/>
                     <Text style={{color:'#657786',fontSize: 13}}>88</Text>
			        </Button>
			        <Button transparent  small style={{alignItems:'flex-start',justifyContent:'flex-start',width:61}}>
                     <Icon name="envelope-o" style={{color:'#657786', fontSize: 20}} />
                    </Button>
			       </View>
				   </Left>
				   </CardItem>
				 
			    </View>
			  </CardItem >
			 
			 </View>
		  </Card>
		    <Card style={{flex:0 , height:250}}>
		   
		     <View style={{flexDirection: "row"}}>
		  	 
                <CardItem cardBody>
				<View style={{paddingBottom:160 , paddingLeft:10, width:80 }}>
				  <Thumbnail source={require('../../images/dil.jpg')}/>
			    </View>
				 </CardItem>
			  
			    <CardItem cardBody>
			    <View style={{flexDirection: "column" , width: 265}}>
                  
			       <View style={{flexDirection: "row"}}>
                    <Text style={{fontWeight:'bold'}}>DILJIT DOSANJH <Thumbnail source={require('../../images/tick.png')} /> </Text><Text note>@diljitdos... .6m </Text><Icon name="angle-down" style={{color:'#657786' ,paddingTop:10, width:15, fontWeight:'bold'}}/>
				   </View>
			      
                   <Text>Waheguru meher kre , tarakiyaan bakshe</Text>
				   <Text>Eda hi khich k rkhna kaam <Text  style={{color:'#1DA1F2'}}>@srsingh_13</Text></Text>
				   <Text> Oye !!.. <Text  style={{color:'#1DA1F2'}}>@KylieJenner</Text> tu v congratulate krde mere veer nu </Text>
				   <Text  style={{color:'#1DA1F2'}}>#Lubju #1milli</Text>
		         <CardItem cardBody>
				  <Left>
				   <View style={{flexDirection: "row",paddingTop:10 ,paddingBottom:10 }}>
                    <Button transparent small style={{alignItems:'flex-start', justifyContent:'flex-start',alignContent:'flex-start',width:65}}>
                     <Icon name="comment-o" style={{color:'#657786', fontSize: 20}} />
                     <Text style={{color:'#657786',fontSize: 13}}>59</Text>
                    </Button>
			        <Button transparent  small style={{alignItems:'flex-start',justifyContent:'flex-start',width:65}}>
                     <Icon name="retweet" style={{color:'#657786', fontSize:20}}/>
                     <Text style={{color:'#657786',fontSize: 13}}>39</Text>
			        </Button>
			        <Button transparent small style={{alignItems:'flex-start',justifyContent:'flex-start',width:65}}>
                     <Icon name="heart-o" style={{color:'#657786', fontSize: 20}}/>
                     <Text style={{color:'#657786',fontSize: 13}}>70</Text>
			        </Button>
			        <Button transparent  small style={{alignItems:'flex-start',justifyContent:'flex-start',width:61}}>
                     <Icon name="envelope-o"style={{color:'#657786', fontSize: 20}} />
                    </Button>
			       </View>
				   </Left>
				   </CardItem>
				 
			    </View>
			  </CardItem >
			 
			 </View>
		  </Card>
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
