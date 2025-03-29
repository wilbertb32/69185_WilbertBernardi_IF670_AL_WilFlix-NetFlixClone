import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Link, router } from 'expo-router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = () => {
    // In a real app, handle user registration here
    router.replace('/(tabs)');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=2889&auto=format&fit=crop' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.logo}>WILFLIX</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={styles.loginText}>Already have an account? Sign in</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    color: '#E50914',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 48,
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 4,
    padding: 16,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#E50914',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
  },
});