import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageScreen from './screen/MessageScreen';
import Screen from './components/Screen';

export default function App() {
  return (
    <Screen>
      <MessageScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
});
