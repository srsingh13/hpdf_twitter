// import required modules
import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import App from '../../App';

//define the contents of footer
export default class AppFooter extends Component {


 render() {



  
      return(
        <Footer style={{backgroundColor: 'white'}}>
            <FooterTab style={{backgroundColor: 'white'}}>
              <TouchableOpacity transparent style={{marginLeft: 20, justifyContent: 'center'}}>
                <Text style={{color : "#1DA1F2"}}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity transparent style={{paddingLeft: 15, justifyContent: 'center'}}>
                <Text style={{color:"#657786"}}>Mentions</Text>
              </TouchableOpacity>
              <Right>
                <TouchableOpacity transparent style={{marginRight: 20}} >
                  <Icon name="settings" size={25} style={{color:"#1DA1F2"}} />
                </TouchableOpacity>
              </Right>
            </FooterTab>
        </Footer>
      );
  }
}


