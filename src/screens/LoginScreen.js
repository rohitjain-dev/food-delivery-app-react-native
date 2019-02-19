//import liraries
import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import {Title,TextInput, Button,Text} from 'react-native-paper';

// create a component
class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Title style={styles.title}>Sign In</Title>
                <View style={styles.secondContainer}>
                    <TextInput
                        style={styles.emailInput}
                        keyboardType="email-address"
                        mode="outlined" label="email"/>
                    <TextInput 
                        mode="outlined"
                        secureTextEntry={true} 
                        label="password"
                        placeholder="password"/>
                </View>
                <View style={styles.thridContainer}>
                    <Button style={styles.loginbutton} mode="contained"
                    onPress={()=>this.props.navigation.navigate('Drawer')}>Log in</Button>
                    <Text style={styles.ortext}>OR</Text>
                    <Button style={styles.facebookbutton} mode="outlined">Forget Password</Button>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding:20
    },
    title:{
        alignItems:"flex-start",
        color:"#64d",
        fontWeight:"bold",
        fontSize:30
    },
    secondContainer:{
        margin:12,
    },
    loginbutton:{
        width:350,
        borderRadius:10,
        borderWidth:2
    },
    facebookbutton:{
        width:350,
        borderRadius:10,
        borderWidth:2
    },
    ortext:{
        marginTop:10,
        marginBottom:10,
        fontSize:20
    },
    thridContainer:{
        justifyContent:"center",
        alignItems:"center"
    }

});

//make this component available to the app
export default LoginScreen;
