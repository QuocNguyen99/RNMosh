import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListItemDelete() {
    return (
        <View style={styles.delete}>
            <MaterialCommunityIcons name='trash-can-outline' size={30} color='white' />
        </View>
    )
}

const styles = StyleSheet.create({
    delete: {
        flex: 1,
        backgroundColor: 'red',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    }
})
