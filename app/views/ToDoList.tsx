
import React from 'react';
import { View, Text, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
    SafeAreaView,
    Button,
    StyleSheet,
    TextInput
  } from 'react-native';
import {ToDo} from './ToDo';
import {authHeader} from './AuthHeader'



export class ToDoList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={ 
            toDoLoaded:false,
            bodyStatus: '200',
            toDoItem:''
        };
    }

    componentDidMount()
    {
        return fetch ('http://danielracolta.co.uk:8080/api/todo',
        {
            method:'GET',
            // headers: authHeader()
        })
        .then((response) => 
        {
            this.setState({bodyStatus : response.status});
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

    addToDo=(title) =>{
        this.setState({toDoItem:''});
        fetch('http://danielracolta.co.uk:8080/api/todo/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: title,
              completed: false
            })
            })
            .then((response) => 
            {
                return response.json();
            })
            .then((responseJson) => {
                this.setState({
                    toDoList: this.state.toDoList.concat(responseJson)
                });
            })
            .catch((error) => 
            {
                Alert.alert("Doamne feri2");
                console.error(error);
            });
    }

    refreshPage = (id : string) => 
    {
        const newState = this.state;
        const index = this.state.toDoList.findIndex(a => a.id === id);
        if(index === -1 ) return;
        newState.toDoList.splice(index,1);
        this.setState(newState);
    }

    render() {
        return(
            
            <SafeAreaView style={styles.safeAreaStyle}>
                { 
                    this.state.toDoLoaded && (
                    <View >
                        <FlatList style= {{marginTop:30, flex:1, width: 300, borderColor: '#f654f', borderWidth:1}}
                            data = {this.state.toDoList}
                            keyExtractor = {item => item.id.toString()}
                            renderItem={({item}) =>
                                <ToDo
                                    id={item.id}
                                    title={item.title}
                                    completed={Boolean(item.completed)}
                                    refreshFunction= {this.refreshPage.bind(this)}
                                />
                            
                            }
                        />
                    </View>
                    
                )}
                {!this.state.toDoLoaded && (
                    <View>
                        <Text> Loading...</Text>
                    </View>
                )}
                {this.state.bodyStatus !='200' && (
                    <View style={{paddingTop:30}}>
                        <Text> Response error: {this.state.bodyStatus}</Text>
                    </View>
                )}
                {this.state.error && (
                    <View style={{paddingTop:30}}>
                        <Text> {this.state.error}</Text>
                    </View>
                )}
                <Text> Add To Do:</Text>
                <TextInput 
                    style={styles.textInput}
                    value={this.state.toDoItem}
                    onChangeText={event => this.setState({toDoItem:event})}
                ></TextInput>
                <Button
                title="Add to do"
                onPress={() => this.addToDo(this.state.toDoItem)}
                />
                <Text>I am App Screen One</Text>
                <Button
                title="Go to Screen 2"
                onPress={() => {
                    this.props.navigation.navigate(ScreenConstants.APP_SECOND_SCREEN);
                }}
                />
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
      marginBottom: 90,
      marginTop:30
    },
    safeAreaStyleToDo: {
        flex: 1,
        marginTop:30
      },
    checkbox: {
        alignSelf: "center",
    },
    sameRow: {
        flex:2,
        flexDirection:'row'
    },
    label: {
        margin: 8,
        textAlign:'center'
    },
    textInput:
    {
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom:20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC'
    }
  });