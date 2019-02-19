//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { DrawerActions } from "react-navigation";
import { Text, Appbar, Title, Avatar, Card } from "react-native-paper";
import Carousel from "react-native-snap-carousel";

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
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      place: dummyRestaurant
    };
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
          <Appbar.Content title="Home" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginLeft: 10, marginRight: 10 }}
        >
          <Title>Popular Categories</Title>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.data}
            keyExtractor={(item, index) => item.title}
            renderItem={({ item: rowData }) => {
              return (
                <View style={styles.popularCategories}>
                  <Avatar.Image size={100} source={{ uri: rowData.imageUrl }} />
                  <Text style={styles.popularText}>{rowData.title}</Text>
                </View>
              );
            }}
          />
          <Title>Best Deals</Title>
          <Carousel
            enableMomentum={true}
            activeSlideAlignment={"start"}
            ref={c => {
              this._carousel = c;
            }}
            layout={"default"}
            data={dummyData}
            inactiveSlideScale={0.95}
            inactiveSlideOpacity={1}
            renderItem={({ item: rowData }) => {
              return (
                <View>
                  <Card>
                    <Card.Cover source={{ uri: rowData.imageUrl }} />
                    <Text 
                      style={{fontSize:20,padding:20}}>{rowData.title}</Text>
                  </Card>
                </View>
              );
            }}
            sliderWidth={500}
            itemWidth={200}
          />
          <Title style={{marginTop:15}}>Most Popular Restaurant</Title>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.place}
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
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20
  },
  popularCategories: {
    flex: 1,
    alignItems: "center",
    margin: 7
  },
  popularText: { marginTop: 5, fontSize: 17 }
});

//make this component available to the app
export default HomeScreen;
