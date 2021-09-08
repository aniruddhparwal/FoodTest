import React, { useEffect } from 'react'
import { Image, Dimensions, View, Text, BackHandler } from 'react-native'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function IndividualRes({ route, navigation }) {


    const { item } = route.params
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
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginVertical: 10
            }}>
                <Text style={{
                    fontSize: 40
                }}>{item["title"]}</Text>
                <Icon onPress={() => navigation.navigate('Scanner')} name="qrcode" size={40} color="#900" />
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={{ uri: item["image"] }}
                    style={{
                        width: Dimensions.get('window').width - 20,
                        height: Dimensions.get('window').width * 0.6,
                        resizeMode: "contain"
                    }} />
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{
                    fontSize: 25,
                }}>Description:</Text>
                <Text style={{
                    fontSize: 20,
                }}>{item["description"]}</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <Button>Get Direction</Button>
            </View>
        </View>
    )
}
