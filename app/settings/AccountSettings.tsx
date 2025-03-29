import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UpdateProfile from './UpdateProfile';
import ChangePassword from './ChangePassword';
import ManageSubscription from './ManageSubscription';

type RootStackParamList = {
  AccountSettings: undefined;
  UpdateProfile: undefined;
  ChangePassword: undefined;
  ManageSubscription: undefined;
};

type AccountSettingsProps = StackScreenProps<RootStackParamList, 'AccountSettings'>;

const Stack = createStackNavigator<RootStackParamList>();

function AccountSettings({ navigation }: AccountSettingsProps) {
  const handleUpdateProfile = () => {
    navigation.navigate('UpdateProfile');
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const handleManageSubscription = () => {
    navigation.navigate('ManageSubscription');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Settings</Text>
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleManageSubscription}>
        <Text style={styles.buttonText}>Manage Subscription</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function AccountSettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ManageSubscription" component={ManageSubscription} />
    </Stack.Navigator>
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