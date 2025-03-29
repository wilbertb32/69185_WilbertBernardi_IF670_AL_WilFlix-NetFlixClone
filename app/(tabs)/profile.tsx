import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { LogOut, Settings } from 'lucide-react-native';


export default function Profile() {
  const handleSignOut = () => {
    router.replace('/login'); 
  };

  const navigateTo = (path: string) => {
    router.push('/settings/AccountSettings');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/wanganmidnight/images/4/49/Kou-chan_RX-8.jpg/revision/latest?cb=20241220182910' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>WEBE</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option} onPress={() => navigateTo('/app/settings/AccountSettings')}>
        <Settings color="#fff" size={24} />
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.optionText}>App Version : 1.0.0</Text>
        <Text style={styles.optionText}>Created using React Native</Text>
        <Text style={styles.optionText}>Powered by : Expo</Text>
        <Text style={styles.optionText}>{'\n\n\n\n\n\n\n\n\n\n\n\n\n'}© 2025 WEBE</Text>
        <Text style={styles.optionText}>All rights reserved</Text>
        <Text style={styles.optionText}></Text>
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <LogOut color="#E50914" size={24} />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 16,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 8,
    marginTop: 'auto',
  },
  signOutText: {
    color: '#E50914',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
