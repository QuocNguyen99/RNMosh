import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListitemSaparator from '../components/ListitemSaparator';
import Screen from '../components/Screen';
import color from '../config/color';
import Icon from '../components/Icon'

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: color.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: color.secondary
        }
    }
]

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Huỳnh Quốc Nguyên'
                    subTitle='huynhquocnguyen99@gmail.com'
                    image={require('../asset/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListitemSaparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />
                    }
                />
            </View>
            <ListItem
                title='Log out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d' />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: color.light
    }
})
