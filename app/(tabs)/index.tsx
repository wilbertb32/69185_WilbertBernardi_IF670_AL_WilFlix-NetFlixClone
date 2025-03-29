import React, { useRef, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { router } from 'expo-router';

const INTRO = {
  title: 'Hello, what do you want to watch today?',
  image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop',
};

const DATA = [
  {
    category: 'Movies',
    content: [
      'https://upload.wikimedia.org/wikipedia/id/thumb/b/b6/Ne_Zha_2_poster.jpg/250px-Ne_Zha_2_poster.jpg',
      'https://awsimages.detik.net.id/community/media/visual/2025/03/26/a-working-man-1742965076914_34.jpeg?w=1200',
      'https://upload.wikimedia.org/wikipedia/id/2/2d/Mickey_17_film_poster.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNn9N4C5n0PzAipf-XXhjtVN9eW8y5YI5mIQ&s',
    ],
  },
  {
    category: 'TV Series',
    content: [
      'https://m.media-amazon.com/images/M/MV5BMDRiNTBlY2EtZmRiZC00Mzc4LTljZDctNWQ5ZGY2NjUwNjE4XkEyXkFqcGc@._V1_.jpg',
      'https://static0.srcdn.com/wordpress/wp-content/uploads/2025/01/03164600_poster_w780.jpg',
      'https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      'https://upload.wikimedia.org/wikipedia/id/3/35/Gyeongseong_Creature_poster.jpg',
    ],
  },
];

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // For fade-in animation
  const slideAnim = useRef(new Animated.Value(300)).current; // For slide-in animation

  const navigateTo = (path: string) => {
      router.push('/details/MovieDetails');
  };

  useEffect(() => {
    // Start fade-in animation for the featured image
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Start slide-in animation for the sections
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.featured, { opacity: fadeAnim }]}>
        <Image source={{ uri: INTRO.image }} style={styles.featuredImage} />
        <View style={styles.featuredContent}>
          <Text style={styles.featuredTitle}>{INTRO.title}</Text>
        </View>
      </Animated.View>

      {DATA.map(({ category, content }) => (
        <Animated.View
          key={category}
          style={[styles.section, { transform: [{ translateY: slideAnim }] }]}
        >
          <Text style={styles.sectionTitle}>{category}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.movieList}>
            {content.map((item, index) => (
              <TouchableOpacity key={index} style={styles.movieCard} onPress={() => navigateTo('/details/MovieDetails')}>
                <Image source={{ uri: item }} style={styles.movieImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  featured: {
    height: 500,
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieList: {
    flexDirection: 'row',
  },
  movieCard: {
    marginRight: 12,
  },
  movieImage: {
    width: 140,
    height: 200,
    borderRadius: 4,
  },
});