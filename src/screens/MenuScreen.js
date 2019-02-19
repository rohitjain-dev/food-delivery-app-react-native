//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
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
          keyExtractor={(item, index) => item.title}
          renderItem={({ item: rowData }) => {
            return (
              <View style={styles.cardContainer}>
                <Card
                  style={{
                    elevation: 1,
                    borderColor: "#000",
                    margin: 10,
                  }}
                >
                  <Card.Cover source={{ uri: rowData.imageUrl }} />
                </Card>
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
    flex:1
  }
});

//make this component available to the app
export default MenuScreen;
