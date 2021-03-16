import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import store from './store';
import types from './types';


class Counter extends Component {


    increment=()=>{
        
        store.dispatch({
            type:types.INCREASE_COUNT,
            payload: store.getState().counter,
            
        })
        this.setState({})
        // store.subscribe(()=>this.setState({}))
        console.log(store.getState().counter)
    }
    decrement=()=>{
        store.dispatch({
            
            type:types.DECREASE_COUNT,
            payload: store.getState().counter
        })
        this.setState({})
        // store.subscribe(()=>this.setState({}))
        console.log(store.getState().counter)
    }
   


    render() {
        
const {counter} = store.getState();
        return (
            <View style={styles.container}>
                <Text>{counter}</Text>
                <TouchableOpacity onPress={this.increment}><Text style={styles.textButton}>increment</Text></TouchableOpacity>
      <TouchableOpacity onPress={this.decrement}><Text style={styles.textButton1}>decrement</Text></TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },

    textButton: {
        borderWidth:3,
        padding: 10,
        backgroundColor:"pink"
      },
    
      textButton1: {
        borderWidth:3,
        padding: 10,
        backgroundColor:"lightblue",
        marginTop :10
      }
    
});

//make this component available to the app
export default Counter;
