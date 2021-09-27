import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

export default function PositiveScreen({ route, navigation }) {
    const [amount, setAmount] = React.useState('');
    const { resDiscount, resUniqueID, resName } = route.params;
    console.log(resDiscount);
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        }}>
            <Text style={{ fontSize: 40 }}>Congratulations</Text>
            <Text style={{ fontSize: 20 }}>You have grabed a 🍔☕ with {resDiscount}% off</Text>
            <TextInput
                style={{ backgroundColor: "white", borderRadius: 10, padding: 10 }}
                label="Enter Your Bill amount"
                keyboardType='numeric'
                value={amount}
                mode="outlined"
                onChangeText={text => setAmount(text)}
            />
            <View style={{ flexDirection: 'row' }}>
                <Button onPress={() => navigation.goBack()}>Cancel</Button>
                <Button onPress={() => navigation.navigate('SuccessScreen', { resName: resName, resUniqueID: resUniqueID, billAmount: parseInt(amount), resDiscount: parseInt(resDiscount) })} >Submit</Button>
            </View>
        </View>
    )
}
