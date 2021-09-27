import React, { useEffect } from 'react'
import { View, Text, BackHandler, TextInput, Dimensions } from 'react-native'
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { API } from '../Backend'


export default function SelectedRes({ navigation, route }) {

    const [visible, setVisible] = React.useState(false);
    const [amount, setAmount] = React.useState('aaa');
    const [resName, setResName] = React.useState('');
    const [resDiscount, setResDiscount] = React.useState('');
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const { code } = route.params;

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${API}getRestaurantById/${code}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result["resName"], result["resDiscount"]);
                setResName(result["resName"]);
                setResDiscount(result["resDiscount"]);
            })
            .catch(error => console.log('error', error));

        console.log(code, "aaaa");
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
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        }}>
            <View style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 40,
                }}>{resName}</Text>
            </View>
            <View>
                <Text style={{
                    fontSize: 20,
                }}>Have you grab any 🍔☕? </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button onPress={() => { navigation.navigate('PositiveScreen', { resUniqueID: code, resName: resName, resDiscount: resDiscount }) }}>Yes</Button>
                <Button onPress={() => navigation.navigate('HomePage')}>No</Button>
            </View>
        </View>
    )
}
