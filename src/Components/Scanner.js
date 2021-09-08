import React, { useEffect } from 'react'
import { View, Text, BackHandler } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Scanner() {

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
            <View>
                <Icon name="arrow-left" size={100} color="#000" />
            </View>
            <Text>Scan it</Text>
        </View>
    )
}
