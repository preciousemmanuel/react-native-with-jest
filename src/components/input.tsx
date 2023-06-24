/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { TextInput,StyleSheet } from "react-native";

interface Props{
    onChange:(e:any)=>void,
    value:string
}

const App:FC<Props>=(props)=>{
    return (
        <TextInput
        style={styles.container}
        value={props.value}
        onChangeText={props.onChange}
       placeholder="Search"
        // style={[styles.input]}
      />
    )
}

const styles=StyleSheet.create({
    container:{
        width:100,
        backgroundColor:"white"
    }
})

export default App;