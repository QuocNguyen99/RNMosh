import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Screen from './components/Screen';
import AppPicker from './components/AppPicker';
import AppTextInput from './components/AppTextInput'
import LoginScreen from './screen/LoginScreen';



export default function App() {

  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
});
