import React, {Component} from 'react';
import {View, Text,} from 'react-native';

export default class Dummy extends Component {
  render(){
    return(
      <View style = {styles.container}>
          <View style={{flex:1, width:100, height:100, backgroundColor:'red'}}></View>
          <View style={{flex:2,width:100, height:100, backgroundColor:'green'}}></View>
          <View style={{flex:3,width:100, height:100, backgroundColor:'blue'}}></View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end', //aligns content in the x-axis
    justifyContent:'space-around', //alings content in y-axis
    flexDirection:'row',
  },
};

//-----For more flexbox information:
// https://facebook.github.io/react-native/docs/flexbox
