import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles'
import AppText from './AppText';
import AppButton from './AppButton';
import PickerItem from './PickerItem';

export default function AppTextInput({ icon, items, selectedItem, placeholder, onSelecteItem }) {
    const [modalVisible, setmodalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => { setmodalVisible(true) }}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} style={styles.icon} size={20} color={defaultStyles.colors.medium} />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide '>
                <TouchableOpacity onPress={() => { setmodalVisible(false) }}>
                    <Text style={{ color: 'blue', textAlign: 'center', fontSize: 20 }} >Close</Text>
                </TouchableOpacity>
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            label={item.label}
                            onPress={() => {
                                setmodalVisible(false);
                                onSelecteItem(item);
                            }}
                        />
                    }
                />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center'
    },
    text: {
        flex: 1
    },
    icon: {
        marginRight: 10
    }
})
