
import React from 'react';
import { View, Text } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {
    SafeAreaView,
    Button,
    StyleSheet
  } from 'react-native';
// @ts-ignore
// import HTML from 'react-native-render-html';

export class ToDoList extends React.Component{

    constructor(props)
    {
        super(props);
        this.state ={ toDoLoaded:false};
    }

    componentDidMount()
    {
        return fetch ('http://192.168.0.108:8080/api/todo')
        .then((response) => 
        {
            this.setState({body : response});
            return response.json();
        })
        .then((responseJson) => {
            this.setState({
                toDoLoaded:true,
                toDoList: Array.from(responseJson)
            });
        })
        .catch((error) => 
        {
            console.error(error);
            this.setState({error: error});
        });
    }

    render() {
        return(
            
            <SafeAreaView style={styles.safeAreaStyle}>
                <ScrollView>
                { 
                    this.state.toDoLoaded && (
                    <View style={{paddingTop:4}} >
                        <FlatList
                            data = {this.state.toDoList}
                            keyExtractor = {(item,index) => item.id.toString()}
                            renderItem={({item}) =>
                                <ToDo
                                    id={item.id}
                                    title={item.title}
                                    completed={item.completed}
                                />
                            }
                        />
                    </View>
                    
                )}
                {this.state.error && (
                    <View style={{paddingTop:3}}>
                        <Text> {this.state.error}</Text>
                    </View>
                )}
                <Text>I am App Screen One</Text>
                <Button
                title="Go to Screen 2"
                onPress={() => {
                    this.props.navigation.navigate(ScreenConstants.APP_SECOND_SCREEN);
                }}
                />
                </ScrollView>
          </SafeAreaView>
          
        );
    }

}

export class ToDo extends React.Component {

render() {
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <Text>{this.props.id}</Text>
            <Text>{this.props.title}</Text>
            <Text>{this.props.completed}</Text>
        </SafeAreaView>
    );
}

}
const ScreenConstants = {
    TO_DO_LIST_SCREEN: 'ToDoList',
    APP_FIRST_SCREEN: 'AppScreen1',
    APP_SECOND_SCREEN: 'AppScreen2',
    AUTH_LOGIN_SCREEN: 'login',
    AUTH_FORGET_SCREEN: 'forgetPassword',
    LOADING_SCREEN: 'AppLoading',
    APP_STACK: 'AppStack',
    AUTH_STACK: 'AuthStack',
  };
  const styles = StyleSheet.create({
    safeAreaStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });