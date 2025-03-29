import { Tabs } from 'expo-router';
import { Home as Home, Search, User, Hourglass, List} from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#666',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="coming-soon"
        options={{
          title: 'Coming Soon',
          tabBarIcon: ({ color, size }) => <Hourglass color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="genre"
        options={{
          title: 'Genre',
          tabBarIcon: ({ color, size }) => <List color={color} size={size} />,
        }}
      />  
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}