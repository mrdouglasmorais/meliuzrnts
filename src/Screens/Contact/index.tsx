import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Appearance,
} from 'react-native';

import axios from 'axios';

const colorSchema = Appearance.getColorScheme();

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sendForm, setSendForm] = useState(false);

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert('Please enter your name');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Please enter your e-mail');
      return;
    }
    if (!phone.trim()) {
      Alert.alert('Please enter your phone number');
      return;
    }
    if (!message.trim()) {
      Alert.alert('Please enter a message');
      return;
    }
    axios
      .post('https://webhook.site/1dc1d3ae-f055-4779-b443-e764914e1c71', {
        name,
        email,
        phone,
        message,
      })
      .catch(e => console.log(e));
    setSendForm(!sendForm);
  };

  function clearInputs() {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  useEffect(() => {
    clearInputs();
  }, [sendForm]);

  return (
    <ScrollView>
      <View style={styles.default}>
        <Text>Send a Message!</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="name"
          keyboardType="default"
          maxLength={100}
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="e-mail"
          keyboardType="email-address"
          autoCorrect={false}
          maxLength={50}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="phone"
          keyboardType="phone-pad"
          maxLength={11}
        />
        <TextInput
          style={styles.inputMessage}
          onChangeText={setMessage}
          value={message}
          placeholder="message"
          keyboardType="default"
          multiline
          placeholderTextColor={colorSchema === 'dark' ? 'red' : '#000'}
          numberOfLines={10}
          maxLength={500}
        />
        <Text>Remaining chars: {500 - message.length}</Text>
        <TouchableHighlight onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.labelButton}>Send Message</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorSchema === 'dark' ? 'black' : '#ffffff0',
    padding: 30,
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width - 30,
    margin: 12,
    color: colorSchema === 'dark' ? '#8f0a6e' : '#000',
    borderColor: colorSchema === 'dark' ? '#fff' : '#000',
    borderWidth: 0.2,
    borderRadius: 5,
    padding: 10,
  },
  inputMessage: {
    height: 200,
    width: Dimensions.get('window').width - 30,
    color: colorSchema === 'dark' ? '#fff' : '#000',
    borderColor: colorSchema === 'dark' ? '#fff' : '#000',
    margin: 12,
    borderWidth: 0.2,
    borderRadius: 2,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#550000',
    padding: 10,
    borderRadius: 8,
  },
  labelButton: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Contact;
