import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';

import AppText from '../components/AppText';
import ListItemDelete from '../components/ListItemDelete';
import colors from '../config/color';

export default function ListItem({ title, subTitle, image, onPress, index, handlerDelete }) {

    const [itemActive, setItemActive] = useState(null);

    const inOpen = (i) => {
        setItemActive(i);

    }
    const isClose = () => {
        setItemActive(null);
    }

    const swipeSetting = {
        autoClose: true,
        onOpen: () => inOpen(index),
        onClose: () => isClose(),

        right: [
            {
                onPress: () => { handlerDelete() },
                component: (<ListItemDelete />)
            }
        ],
        rowId: index,
        sectionId: 1
    }


    return (
        <Swipeout
            {...swipeSetting}
        >
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View style={styles.titleContainer}>
                        <AppText>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeout >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row'
    },
    subTitle: {
        color: colors.medium
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },

})
