import { useState } from 'react';
import { View, TextInput, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';
import { router } from 'expo-router';

const MOVIES = [
  {
    title: 'A Working Man',
    image: 'https://awsimages.detik.net.id/community/media/visual/2025/03/26/a-working-man-1742965076914_34.jpeg?w=1200',
  },
  {
    title: 'Daredevil Born Again',
    image: 'https://m.media-amazon.com/images/M/MV5BMDRiNTBlY2EtZmRiZC00Mzc4LTljZDctNWQ5ZGY2NjUwNjE4XkEyXkFqcGc@._V1_.jpg',
  },
  {
    title: 'Ne Zha 2',
    image: 'https://upload.wikimedia.org/wikipedia/id/thumb/b/b6/Ne_Zha_2_poster.jpg/250px-Ne_Zha_2_poster.jpg',
  },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (path: string) => {
        router.push('/details/MovieDetails');
  };

  // Filter movies berdasarkan search query
  const filteredMovies = MOVIES.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon color="#999" size={24} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies, TV shows..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.results}>
        <Text style={styles.title}>Recent Searches{'\n\n'}</Text>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <TouchableOpacity key={index} style={styles.movieCard} onPress={() => navigateTo('/details/MovieDetails')}>
              <Image source={{ uri: movie.image }} style={styles.movieImage} />
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResults}>No movies found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    margin: 20,
    padding: 12,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
  },
  results: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  movieCard: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 4,
  },
  movieInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  movieTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noResults: {
    color: '#999',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
