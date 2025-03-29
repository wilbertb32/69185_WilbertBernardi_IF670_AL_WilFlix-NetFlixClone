import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ManageSubscription() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Subscription</Text>
      <Text style={styles.description}>
        This feature allows you to manage your subscription settings.
      </Text>

      {/* Current Plan Section */}
      <View style={styles.planContainer}>
        <Text style={styles.planLabel}>Current Plan:</Text>
        <Text style={styles.planName}>Premium Plan</Text>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Plan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel Subscription</Text>
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
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  planContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  planLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  planName: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});