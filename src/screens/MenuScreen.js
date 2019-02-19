//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList,Image } from "react-native";
import { Card, Appbar } from "react-native-paper";
import {DrawerActions} from 'react-navigation'

const dummyData = [
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Burgers"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Shakes"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Sandwhichs"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Continetial"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "chinees"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Local Food"
  }
];

// create a component
class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="Menus" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardContainer}>
              <Image style={styles.imageContainer} source={{uri:item.imageUrl}}/>
                <View style={styles.shade}>
                  <Text style={styles.textContainer}>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  cardContainer:{
    flex:1,
    borderRadius:2,
    borderWidth:1.0,
    borderColor:"#fafafa",
    margin:20,
    height:200,
    elevation:2
  },
  textContainer:{
    color:"#fafafa",
    fontSize:20
  },
  shade:{
    backgroundColor:"#000",
    height:30,
    opacity:0.2
  },
  imageContainer:{
    flex:3,
  }
});

//make this component available to the app
export default MenuScreen;
