import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import VectorImage from 'react-native-vector-image';

function Header() {
    return (
        <ScrollView>
            <View>
                <VectorImage source={require('./try.svg')} />
                <Text>Header</Text>
            </View>
        </ScrollView>
    )
}

export default Header
