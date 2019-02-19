//import liraries
import React, { Component } from "react";
import { View,StyleSheet,ScrollView,FlatList } from "react-native";
import { Card,Appbar,Button,Text} from "react-native-paper";
import {DrawerActions} from "react-navigation";
// create a component
class CartScreen extends Component {
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
          <Appbar.Content title="Cart" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header>
        <ScrollView>
          <Card>
            <Card.Content style={styles.cardContainer}>
              <Text>1</Text>
              <Text>Large Pizza</Text>
              <Text>$8.5</Text>
            </Card.Content>
          </Card>
          <View style={styles.totalContainer}>
            <Text>Total</Text>
            <Text>$8.5</Text>
          </View>
        </ScrollView>
        <Button>Place Order</Button>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  cardContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20
  },
  totalContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20
  },
});

//make this component available to the app
export default CartScreen;
