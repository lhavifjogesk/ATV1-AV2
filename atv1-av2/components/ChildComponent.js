import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const ChildComponent = ({ number, message, onNumberChange, onMessageChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Número (Ex: 5588999991234)"
        keyboardType="phone-pad"
        value={number}
        onChangeText={onNumberChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Mensagem"
        value={message}
        onChangeText={onMessageChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default ChildComponent;
