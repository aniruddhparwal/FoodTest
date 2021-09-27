import React, { useEffect } from 'react'
import { View, Text, Dimensions, BackHandler } from 'react-native'
import { Button } from 'react-native-paper'
import { API } from '../Backend'

export default function SuccessScreen({ navigation, route }) {
    const { resDiscount, billAmount, resName, resUniqueID } = route.params
    const [payableAmount, setPayableAmount] = React.useState(0)
    useEffect(() => {
        console.log(resDiscount, billAmount)
        let amount = (billAmount * resDiscount) / 100
        let payableAmountIs = billAmount - amount
        setPayableAmount(payableAmountIs)
        const backAction = () => {
            navigation.navigate('HomePage')
            return true
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "uniqueResId": resUniqueID,
            "resName": resName,
            "billAmount": billAmount,
            "billDiscount": resDiscount,
            "discountGiven": billAmount - payableAmountIs,
            "payableAmount": payableAmountIs,
            "timeOfTransaction": new Date().toLocaleString(),
            "dateOfTransaction": new Date().toLocaleDateString(),
            "userLocation": "null",
        });
        console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${API}addTransaction`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, []);
    return (
        <View style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ fontSize: 40 }}>Hurray</Text>
            <Text style={{ fontSize: 20 }}>You saved Rs.{billAmount - payableAmount} on your todays Bill</Text>
            <Text style={{ fontSize: 15 }}>Pay Only Rs.{payableAmount}</Text>
            <Button onPress={() => { navigation.navigate('HomePage') }}>Go Back</Button>
        </View>
    )
}
