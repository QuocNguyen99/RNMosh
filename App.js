import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from './components/Screen';
import AccountScreen from './screen/AccountScreen';
import ListingsScreen from './screen/ListingsScreen';

export default function App() {
  return (
    <ListingsScreen />
  );
}

const styles = StyleSheet.create({
});
