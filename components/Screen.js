import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

export default function Screen({ children }) {
    console.log(StatusBar.currentHeight);
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    }
})
