
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import {
    SafeAreaView,
    Button,
    StyleSheet
  } from 'react-native';
  import { CheckBox } from 'react-native'

interface ToDoProps{
    completed: boolean;
    id: string,
    title: string,
    refreshFunction(id : string): any
}



export const ToDo = ({id,completed,title,refreshFunction} : ToDoProps)  => {
    
    const [isCompleted,setIsComplete] = useState(completed);
    const [toDoResponseStatus,setToDoResponseStatus] = useState(200);

    const completeToDo=(id : string) => {
        
        fetch('http://danielracolta.co.uk:8080/api/todo/complete/'+ id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then((response) => 
            {
                setToDoResponseStatus(response.status);
                if(toDoResponseStatus==200){
                    setIsComplete(true);
                }
            })
            .catch((error) => 
            {
                Alert.alert("Doamne feri2");
                console.error(error);
            });
    }

    const removeToDo=(id : string) => {
        fetch('http://danielracolta.co.uk:8080/api/todo/'+ id, {
            method: 'DELETE'
            })
            .then((response) => 
            {
                refreshFunction(id);
            })
            .catch((error) => 
            {
                Alert.alert("Doamne feri2");
                console.error(error);
            });
    }

    return (
        <SafeAreaView style={styles.safeAreaStyleToDo}>
            <View style={styles.sameRow}>
                <Text style={{flex:1,textAlign:'left'}} >{title}</Text>
                <Button title='Remove' onPress={() => removeToDo(id)}/>
            </View>
            {!isCompleted &&(
                <View >
                    <Text style={styles.label}>Complete?</Text>
                    <CheckBox
                        value={isCompleted}
                        onValueChange={() => completeToDo(id)}
                        style={styles.checkbox}
                    />
                {toDoResponseStatus !=200 && (
                    <Text> Proble occured while completing!</Text>
                )}
                </View>
            )}
            {isCompleted && (
                <Text style={styles.label}>Completed</Text>
            )}

            
        </SafeAreaView>
    );

}


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