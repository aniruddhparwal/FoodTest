import React, { useEffect,useState } from 'react'
import { View, Text, BackHandler } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Scanner({navigation}) {


    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);
    return (
        <View>
        <View style={{
            flexDirection:"row",
            backgroundColor:"#c4c4c4",
            // justifyContent:"center",
            alignItems:"center",
            }}>
            <View style={{
                marginVertical:10
            }}>
                <Icon onPress={()=>navigation.goBack()} name="arrow-left" size={50} color="#000" />
            </View>
            <Text  style={{
                marginHorizontal:10
            }} >Scan it</Text>
        </View>
        <View>
        <Text>jisfssd</Text>
        </View>
        </View>
    )
}
