import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const MOVIE_DETAILS = {
  id: 2,
  title: 'Ne Zha 2',
  image: 'https://upload.wikimedia.org/wikipedia/id/thumb/b/b6/Ne_Zha_2_poster.jpg/250px-Ne_Zha_2_poster.jpg',
  description: 'Ne Zha 2 is a Chinese animated fantasy film, a sequel to the popular Ne Zha (2019). It follows the legendary figure Ne Zha as he embarks on new adventures.',
  releaseDate: 'March 21, 2025',
  genre: 'Animation, Fantasy, Action',
  rating: '8.5/10',
};

export default function MovieDetails() {
  const handleWatch = () => {
    Alert.alert('Watch', 'This feature allows you to watch the movie.');
  }
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: MOVIE_DETAILS.image }} style={styles.movieImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{MOVIE_DETAILS.title}</Text>
        <Text style={styles.info}>Release Date: {MOVIE_DETAILS.releaseDate}</Text>
        <Text style={styles.info}>Genre: {MOVIE_DETAILS.genre}</Text>
        <Text style={styles.info}>Rating: {MOVIE_DETAILS.rating}</Text>
        <Text style={styles.description}>{MOVIE_DETAILS.description}</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => handleWatch()}>
          <Text style={styles.buttonText}>Watch</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  movieImage: { width: '100%', height: 400 },
  content: { padding: 20 },
  title: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  info: { color: '#bbb', fontSize: 16, marginBottom: 5 },
  description: { color: '#ddd', fontSize: 16, marginTop: 10 },
  button: { backgroundColor: '#e50914', padding: 15, borderRadius: 5, marginVertical: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});