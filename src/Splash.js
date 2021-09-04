import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomePage')
        }, 2000)
    }, [])
    return (
        <View>
            <View style={{ backgroundColor: '#fff', height: '100%', width: '100%' }}>
                <Image
                    source={require('./Images/Logo.png')}
                    resizeMode={'contain'}
                    style={{
                        height: hp(25),
                        width: wp(65),
                        marginTop: hp(25),
                        alignSelf: 'center',
                    }}
                />
            </View >
        </View>
    )
}

export default Splash
