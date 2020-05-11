import React from 'react';
import {
  Text,
  SafeAreaView,
  AsyncStorage,
  StyleSheet
} from 'react-native';


export class ApploadingScreen extends React.Component {
    componentDidMount() {
      this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userAuthFlag');
      console.log(userToken);
      this.props.navigation.navigate(
        userToken ? ScreenConstants.APP_STACK : ScreenConstants.AUTH_STACK,
      );
    };
  
    render() {
      return (
          
        <SafeAreaView style={styles.safeAreaStyle}>
          <Text>Loading</Text>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    safeAreaStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const ScreenConstants = {
    APP_FIRST_SCREEN: 'AppScreen1',
    APP_SECOND_SCREEN: 'AppScreen2',
    AUTH_LOGIN_SCREEN: 'login',
    AUTH_FORGET_SCREEN: 'forgetPassword',
    LOADING_SCREEN: 'AppLoading',
    APP_STACK: 'AppStack',
    AUTH_STACK: 'AuthStack',
  };