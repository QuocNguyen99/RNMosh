import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles'

export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} style={styles.icon} size={20} color={defaultStyles.colors.medium} />}
            <TextInput style={[defaultStyles.text, styles.text2]} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10
    },
    text2: {
        flex: 1
    }
})
