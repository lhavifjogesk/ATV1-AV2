import React, { useState } from 'react';
import { Button, StyleSheet, View, Alert, Linking } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    if (formattedNumber.startsWith('55') && formattedNumber.length >= 12) {
      const url = `https://api.whatsapp.com/send?phone=${formattedNumber}&text=${encodeURIComponent(message)}`;
      Linking.openURL(url).catch(() => {
        Alert.alert('Erro', 'Não foi possível abrir o WhatsApp');
      });
    } else {
      Alert.alert('Número inválido', 'Por favor, insira um número válido com o código do país 55.');
    }
  };

  return (
    <View style={styles.container}>
      <ChildComponent
        number={phoneNumber}
        message={message}
        onNumberChange={setPhoneNumber}
        onMessageChange={setMessage}
      />
      <Button title="Enviar Mensagem" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default ParentComponent;
