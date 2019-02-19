//import liraries
import React, { Component } from "react";
import { View, StyleSheet,FlatList } from "react-native";
import { DrawerActions } from "react-navigation";
import { Appbar,Card } from "react-native-paper";

const dummyRestaurant = [
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Ten Dowing Street",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Boozer's Bar & Restaurant",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Calypso Club & Lounge",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Trance Pub",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Vidoora",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Mustang Lounge",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Quaram Lounge",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Bottom Sip & Bar",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Tabrena The Cafe Bar",
      place: "Vijay Nagar"
    },
    {
      imageUrl: "http://lorempixel.com/400/200/nightlife",
      title: "Pitchers Cafe and Bar",
      place: "Vijay Nagar"
    }
  ];

// create a component
class RestaurantScreen extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:dummyRestaurant
      }
  }

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="Restaurant" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            keyExtractor={(item, index) => item.title}
            renderItem={({ item: rowData }) => {
              return (
                <Card style={{
                  elevation:1,
                  borderColor:"#000",
                  margin:10,
                }}>
                    <Card.Title title={rowData.title} />
                    <Card.Cover source={{ uri: rowData.imageUrl }} />
                </Card>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});

//make this component available to the app
export default RestaurantScreen;
