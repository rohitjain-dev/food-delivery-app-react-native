//import liraries
import React, { Component } from "react";
import { View,FlatList,StyleSheet,ScrollView} from "react-native";
import {Appbar,Card,Text,Button} from "react-native-paper";
import {DrawerActions} from "react-navigation";

const orderData=[
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Burgers",
    price:"$9.00",
    quantity:"2"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Shakes",
    price:"$18.00",
    quantity:"1"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Sandwhichs",
    price:"$50.00",
    quantity:"5"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Continetial",
    price:"$90.00",
    quantity:"2"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "chinees",
    price:"$12.00",
    quantity:"1"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Local Food",
    price:"$15.00",
    quantity:"2"
  }
];


// create a component
class OrderScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      orders:orderData
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
          <Appbar.Content title="Orders" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header>
        <FlatList
        contentContainerStyle={{paddingBottom:50}}
        showsVerticalScrollIndicator={false}
        data={this.state.orders}
        renderItem={({ item: rowData }) =>{
          return (
                <Card style={{
                  elevation:1,
                  borderColor:"#000",
                  margin:10,
                  flex:1
                }}>
                    <Card.Title title={rowData.title} />
                    <Card.Cover source={{ uri: rowData.imageUrl }} />
                    <Card.Content>
                      <Text>{rowData.price}</Text>
                      <Text>{rowData.quantity}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode="outlined">Reorder</Button>
                    </Card.Actions>
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
    backgroundColor: "#ffffff"
  }
});

//make this component available to the app
export default OrderScreen;
