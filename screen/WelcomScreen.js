import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomScreen() {

    return (
        <ImageBackground
            blurRadius={5}
            source={require('../asset/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../asset/logo-red.png')} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" color="primary" onPress={() => { console.log("Login"); }}></AppButton>
                <AppButton title="Register" color="secondary"></AppButton>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "100%"
    },
    buttonContainer: {
        width: "100%",
        padding: 15
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        top: 50,
        position: 'absolute',
        alignItems: 'center'
    },
    tagline: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 15
    }
})
