/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { TouchableOpacity,StyleSheet, Text } from "react-native";

interface Props{
    onPress:()=>void
}

const App:FC<Props>=(props)=>{
    return (
        <TouchableOpacity style={{backgroundColor:"red",borderRadius:10,padding:10,width:50}} onPress={()=>props.onPress()}>
            <Text style={{color:"#fff"}}>Save</Text>
        </TouchableOpacity>
    )
}

export default App;