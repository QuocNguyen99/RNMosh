import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Screen from './components/Screen';
import AppPicker from './components/AppPicker';
import AppTextInput from './components/AppTextInput'

const categories = [
  { label: 'Macbook Air', value: 1 },
  { label: 'Dell', value: 2 },
  { label: 'Asus', value: 3 }
]

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelecteItem={(item) => setCategory(item)}
        items={categories}
        icon='apps'
        placeholder='Category' />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  );
}

const styles = StyleSheet.create({
});
