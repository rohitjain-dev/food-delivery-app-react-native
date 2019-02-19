//import liraries
import React, { Component } from 'react';
import { ScrollView,View, StyleSheet} from 'react-native';
import {TextInput,Title,Button} from 'react-native-paper';
// create a component
class SignupScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Title style={styles.title}>
                    Create New Account
                </Title>
                <TextInput
                    style={styles.spaceevenly}
                    mode="outlined"
                    label="name"
                    keyboardType="default"
                />
                <TextInput
                  style={styles.spaceevenly}
                  mode="outlined"
                  label="email"
                  keyboardType="email-address"  
                />
                <TextInput
                    style={styles.spaceevenly}
                    mode="outlined"
                    label="Mobile Number"
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.spaceevenly}
                    mode="outlined"
                    secureTextEntry={true} 
                    label="password"
                    placeholder="password"
                />
                <Button
                     style={styles.signupbutton}
                     mode="contained">
                     Sign Up
                </Button>
            </ScrollView>
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
        fontSize:22
    },
    signupbutton:{
        padding:10,
        marginLeft:15,
        width:300,
        borderRadius:10,
        borderWidth:2,
        marginTop:12
    },
    spaceevenly:{
        marginTop:12,
        marginBottom:12
    }
});

//make this component available to the app
export default SignupScreen;
