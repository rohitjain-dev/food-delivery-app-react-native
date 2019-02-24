//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux' ;
import firebase from 'firebase';
import reducers from './src/reducers';
import AppNavigator from './src/routing/AppNavigator';
import {createStore,applyMiddleware} from "redux";
import  ReduxThunk from 'redux-thunk';
//screen imports



// create a component
class App extends Component {

  componentWillMount(): void {
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
        <StoreProvider store={store}>
          <PaperProvider>
            <View style={style.container}>
              <AppNavigator></AppNavigator>
            </View>
          </PaperProvider>
        </StoreProvider>
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
