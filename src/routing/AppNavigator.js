import React from 'React';
import {createDrawerNavigator,createStackNavigator,createAppContainer} from 'react-navigation';
import {ScrollView,SafeAreaView} from 'react-native';
import {Drawer} from 'react-native-paper';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import MenuScreen from '../screens/MenuScreen';
import OrderScreen from '../screens/OrderScreen';
import CartScreen from '../screens/CartScreen';

const DrawerNavigator = createDrawerNavigator(
    {
        Home:{screen:HomeScreen},
        Restaurants:{screen:RestaurantScreen},
        Menus:{screen:MenuScreen},
        Orders:{screen:OrderScreen},
        Cart:{screen:CartScreen}
    },
    {
        contentComponent: props => (
            <ScrollView>
              <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
                <Drawer.Item
                  label="Home"
                  active="true"
                  onPress={() => props.navigation.navigate("Home")}
                />
                <Drawer.Item
                  label="Restaurants"
                  onPress={() => props.navigation.navigate("Restaurants")}
                />
                <Drawer.Item
                    label="Menus"
                    onPress={() => props.navigation.navigate("Menus")}
                />
                <Drawer.Item
                    label="Orders"
                    onPress={() => props.navigation.navigate("Orders")}
                />
                <Drawer.Item
                    label="Cart"
                    onPress={()=> props.navigation.navigate("Cart")}
                />
                <Drawer.Item
                    label="Logout"
                    onPress={()=> console.log("Logout Clicked")}
                />
              </SafeAreaView>
            </ScrollView>
          )
    }
)

navigationOptions = ({ navigation }) => ({
    header: null
})
const AppNavigator= createStackNavigator({
    Welcome:{screen:WelcomeScreen},
    Login:{screen:LoginScreen},
    Signup:{screen:SignupScreen},
    Drawer:{screen:DrawerNavigator,navigationOptions}
},
);

export default createAppContainer(AppNavigator);