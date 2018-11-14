import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class PhotoSection extends Component {
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.thumbnailSection}>
          <Image
              style={styles.thumbnail}
              source={{uri:'https://data.whicdn.com/images/289450553/superthumb.jpg?t=1497468894/>'}}/>
              <View style = {styles.userContainer}>
                  <Text>username</Text>
              </View>
          <Text></Text>
        </View>
        <View>
          <Image
              style={{width:null, height:400}}
              source={{uri:'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}/>
        </View>
        <View style = {styles.heartContainer}>
          <Icon name="heart-o" size={30}>
          </Icon>
        </View>
        <View style = {styles.imageMeta}>
          <Text style = {styles.userName}>username</Text>
          <Text>caption</Text>
        </View>
      </View>
    )
  }
}


const styles = {
    container: {
        marging:10,
        paddingRight:10,
        paddingLeft:10

    },

    thumbnailSection: {
          flexDirection:'row',
          padding: 5,
          borderBottomColor:'#ddd',
          borderBottomWidth:1,
    },

    thumbnail: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },

    userContainer: {
          justifyContent:'center',
          padding:5
    },

    imageMeta: {
      flexDirection:'row',
      paddingRight: 5
    },

    userName:{
      fontWeight: 'bold',
      paddingRight: 5,
      paddingLeft:5
    },
    heartContainer:{
      paddingTop: 10,
      paddingBottom:10
    }

}
