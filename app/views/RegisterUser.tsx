import React,{useState} from 'react';
import { View,Text,Button, Alert,TextInput,StyleSheet } from 'react-native';
import axios from 'axios';

export const RegisterUser = (props) =>{
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    const registerUser=(userName: string, password: string)=>
    {
        axios({
            url    : 'http://danielracolta.co.uk:8080/user',
            method : 'POST',
            data: {
                username: userName,
                password: password
            },
            headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                     }
        })
        .then(function (response) {
            Alert.alert("Congratulation!","Your account was created!"); 
            props.navigation.navigate(ScreenConstants.AUTH_LOGIN_SCREEN);
        })
        .catch(function (error) {
            console.log(error);
            Alert.alert("Wrong credentials","Try again!"); 
        })
    
    }


    return (
        <View>
            <Text style={{textAlign:'center'}}>Registration Page</Text>

            <Text>Username:</Text>
          <TextInput 
            style={styles.textInput}
            value={username}
            onChangeText={event => setUsername(event)}
          ></TextInput>


            <Text>Password:</Text>
          <TextInput 
            style={styles.textInput}
            value={password}
            secureTextEntry={true}
            onChangeText={event => setPassword(event)}
          ></TextInput>

            <Button
            title="Sign Up"
            onPress={() => {registerUser(username,password)}}
          />

        </View>
    );
}

const ScreenConstants = {
    AUTH_LOGIN_SCREEN: 'login',
  };


const styles = StyleSheet.create({
    safeAreaStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput:
    {
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom:20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC'
    }
  });