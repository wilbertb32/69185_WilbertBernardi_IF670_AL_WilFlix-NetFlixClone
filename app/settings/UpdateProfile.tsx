import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function UpdateProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveProfile = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    Alert.alert('Profile Updated', 'Your profile has been successfully updated.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#e50914',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});