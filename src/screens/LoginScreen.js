//import liraries
import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import {Title,TextInput, Button,Text,ActivityIndicator,Colors} from 'react-native-paper';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {connect} from 'react-redux';
// create a component
class LoginScreen extends Component {

    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
r
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator animating={true} color={Colors.red800} />
        }

        return (
            <Button style={styles.loginbutton} mode="contained"
                    onPress={this.onButtonPress.bind(this)}>
                Log in</Button>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Title style={styles.title}>Sign In</Title>
                <View style={styles.secondContainer}>
                    <TextInput
                        style={styles.emailInput}
                        keyboardType="email-address"
                        mode="outlined" label="email"
                        placeholder={"email@example.com"}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    <TextInput 
                        mode="outlined"
                        secureTextEntry={true} 
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </View>
                <View style={styles.thridContainer}>
                    {this.renderButton()}
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

const mapStateToProps = state => {
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    }
};

//make this component available to the app
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginScreen);
