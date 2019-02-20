//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux' ;
import firebase from 'firebase';
import AppNavigator from './src/routing/AppNavigator';
//screen imports



// create a component
class App extends Component {

  componentWillMount(): void {
    var config = {
      apiKey: "AIzaSyD64sSejakUQFxNFin6O85kNH3fOd97v1w",
      authDomain: "manager-f3232.firebaseapp.com",
      databaseURL: "https://manager-f3232.firebaseio.com",
      projectId: "manager-f3232",
      storageBucket: "manager-f3232.appspot.com",
      messagingSenderId: "738202226077"
    };
    firebase.initializeApp(config);
  }

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