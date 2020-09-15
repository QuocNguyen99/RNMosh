import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../config/color';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <Icon name='close-outline' color="white" size={32} style={styles.closeIcon} />
            <Icon name='trash-outline' color="white" size={26} style={styles.deleteIcon} />

            <Image resizeMode="contain" style={styles.img} source={require('../asset/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    closeIcon: {
        top: 10,
        left: 10,
        position: 'absolute'
    },
    deleteIcon: {
        top: 10,
        right: 10,
        position: 'absolute'
    },
    img: {
        width: "100%",
        height: "100%"
    }
})
