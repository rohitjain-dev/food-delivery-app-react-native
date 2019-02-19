//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {Button} from 'react-native-paper';

// create a component
class WelcomeScreen extends Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <View style={style.container}>
                <Image 
                source={
                    require('../../assets/icons8-tableware-100.png')
                    }
                />
                <Text 
                    style={style.headingText}>
                    Welcome to Eats
                </Text>
                <Text 
                    style={style.tagline}>Checkout Menus! Order Food and Make Reservations
                </Text>
                <Button 
                    onPress={()=> this.props.navigation.navigate('Login')} 
                    style={style.login} mode="contained">
                    Login
                </Button>
                <Button 
                    style={style.signup}
                    mode="outlined"
                    onPress={()=>this.props.navigation.navigate('Signup')}>
                    Signup
                </Button>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        fontFamily:"Roboto-Regular"
    },
    headingText:{
        paddingTop:5,
        fontSize:30,
        fontWeight:"bold"
    },
    tagline:{
        paddingTop:10,
        color:"#bcbcbc",
        fontSize:20,
        textAlign:"center"
    },
    login:{
        marginTop:15,
        width:300,
        borderRadius:10,
        borderWidth:2
    },
    signup:{
        marginTop:15,
        width:300,
        borderRadius:10,
        borderWidth:2
    }


})


//make this component available to the app
export default WelcomeScreen;
