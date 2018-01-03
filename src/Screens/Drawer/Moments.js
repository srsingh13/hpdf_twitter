import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Button, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import App from '../../../App';
import DrawerHeader from '../../components/drawerHeader';


//under construction
export default class Moments extends Component {
  render() {
    const { navigation } = this.props;    
    return (
      <Container>
        <DrawerHeader navigation={navigation} title={'Moments'} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}> Under Construction </Text>
        </View>
      </Container>
    );
  }
}