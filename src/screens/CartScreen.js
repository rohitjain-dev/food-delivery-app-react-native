//import liraries
import React, { Component } from "react";
import { View,StyleSheet } from "react-native";
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
        <Card>
            <Card.Title title="Order Name"/>
            <Card.Actions>
                <Button>+</Button>
                <Text>2 Pieces</Text>
                <Button>-</Button>
            </Card.Actions>
        </Card>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  }
});

//make this component available to the app
export default CartScreen;
