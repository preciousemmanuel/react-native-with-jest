/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { Dimensions, View, Text } from "react-native";

const {width}=Dimensions.get("screen");
interface Props{
    onPress?:()=>void,
    title:string
}

const App:FC<Props>=(props)=>{
    return (
      <View style={{width:width-30,backgroundColor:"grey",marginBottom:10}}>
        <Text>{props.title}</Text>
      </View>
    )
}

export default App;