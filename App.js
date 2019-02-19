//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/routing/AppNavigator';
//screen imports



// create a component
class App extends Component {
  render() {
    return (
      <PaperProvider>
        <View style={style.container}>
          <AppNavigator></AppNavigator>
        </View>
      </PaperProvider>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
})


//make this component available to the app
export default App;