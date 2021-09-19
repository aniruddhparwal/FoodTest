import React, { useEffect } from 'react'
import { View, Text, Dimensions, BackHandler } from 'react-native'
import { Button } from 'react-native-paper'

export default function SuccessScreen({ navigation, route }) {
    const { resDiscount, billAmount } = route.params
    const [payableAmount, setPayableAmount] = React.useState(0)
    useEffect(() => {
        console.log(resDiscount, billAmount)
        let amount = (billAmount * resDiscount) / 100
        setPayableAmount(billAmount - amount)
        const backAction = () => {
            navigation.navigate('HomePage')
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
