import React, { useEffect } from 'react'
import { Alert, BackHandler, Image, Text, View } from 'react-native'
import Header from '../Header'

function HomePage() {
    const [expanded, setExpanded] = React.useState(true);

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
        <View>
            {/* <Header /> */}
            <Text>HomePage</Text>
            <Image source={require('../../Images/Logo.png')} style={{ height: 100, width: 100 }} />
        </View>
    )
}

export default HomePage
