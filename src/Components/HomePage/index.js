import React, { useEffect } from 'react'
import { StyleSheet, Alert, BackHandler, Image, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Header'
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


function HomePage() {
    const [expanded, setExpanded] = React.useState(true);
    const [text, setText] = React.useState('');

    const data = [{
        id: 1,
        title: "Teamp",
        description: "Team Project",
        discount: "20%",
    },
    {
        id: 2,
        title: "Teamp",
        description: "Team Project",
        discount: "20%",
    },
    {
        id: 3,
        title: "Teamp",
        description: "Team Project",
        discount: "20%",
    },
    {
        id: 4,
        title: "Teamp",
        description: "Team Project",
        discount: "20%",
    },
    ]

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);


    return (
        <View style={styles.homePage}>
            <View style={{
                flexDirection: "row",
                height: 50,
                width: Dimensions.get('window').width,
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                // backgroundColor: "red",
            }} >
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon name="map-marker" style={{ marginRight: 10 }} size={30} color="#900" />
                    <View>
                        <Text>
                            Anpurnaa
                        </Text>
                        <Text>
                            452009
                        </Text>
                    </View>
                </View>
                <View>
                    <Icon name="qrcode" size={40} color="#900" />
                </View>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center', height: 100, window: 300
            }}>
                <Image
                    source={require('../../Images/Logo.png')}
                    style={{ width: 100, height: 100, resizeMode: "contain" }} />
            </View>
            <View style={{
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: Dimensions.get('window').width,
                alignItems: 'center',
            }}>
                <TextInput
                    style={{ flex: 1, backgroundColor: "white", borderRadius: 10, padding: 10 }}
                    label="Search"
                    value={text}
                    mode="outlined"
                    onChangeText={text => setText(text)}
                />
                <Icon name="search" size={40} color="#900" />
            </View>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Image
                    source={require('../../Images/sale.jpg')}
                    style={{
                        height: 100,
                        width: Dimensions.get('window').width - 20,
                        // resizeMode: "contain"
                    }} />
            </View>
            <ScrollView>
                {data.map((item, index) => (
                    <View key={item.id} style={{
                        flexDirection: "row",
                        marginHorizontal: 20,
                        marginVertical: 10,
                        backgroundColor: "#DCD6F7",
                        padding: 10,
                        borderRadius: 6,
                        shadowColor: "rgba(0,0,0,0,0.25)",
                    }}>
                        <Image
                            source={require('../../Images/sale.jpg')}
                            style={{ height: 90, width: 90, borderRadius: 6 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 30 }}>{item.title}</Text>
                            <Text style={{ fontSize: 20 }}>{item.description}</Text>
                            <Text style={{ fontSize: 10 }}>{item.discount}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: "green" }}>
                {/* <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>{item.discount}</Text> */}
            </View>
        </View >
    )
}

export default HomePage

const styles = StyleSheet.create({
    homePage: {
        height: Dimensions.get('window').height,
    }
})
