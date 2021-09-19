import React, { useEffect } from 'react'
import { Image, Dimensions, Linking, View, Text, BackHandler } from 'react-native'
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
        // return () => backHandler.remove();
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
                }}>{item["resName"]}</Text>
                <Icon onPress={() => navigation.navigate('Scanner')} name="qrcode" size={40} color="#900" />
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={{ uri: item["resImage"] }}
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
                }}>{item["resDescription"]}</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <Button onPress={() => {
                    //                 Linking.canOpenURL(item["resMapLink"]).then(supported => {
                    //   if (supported) {
                    Linking.openURL(item["resMapLink"]);
                    //   } else {
                    //     console.log("Don't know how to open URI: " + item["resMapLink"]);
                    //   }
                    // });
                }}>Get Direction</Button>
            </View>
        </View>
    )
}
