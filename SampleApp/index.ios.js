import React from  'react'
import { AppRegistry,
        View,
        Text,
        StatusBar,
        StyleSheet
        } from 'react-native'



const styles = StyleSheet.create({
      defaultText: {
        fontSize: 22,
        padding:15,
        margin: 4
      }
})

class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden = {true} />
        <Text style={styles.defaultText}>Sierra</Text>
        <Text style={styles.defaultText}>Mango</Text>
        <Text style={styles.defaultText}>Traviss</Text>
      </View>
      )
  }
}

AppRegistry.registerComponent('SampleApp', () => App)
