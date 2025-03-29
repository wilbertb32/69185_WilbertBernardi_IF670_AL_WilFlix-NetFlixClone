import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const COMING_SOON = [
  {
    id: 1,
    title: "The Accountant 2",
    date: "Coming April 25",
    description: "Christian Wolff applies his brilliant mind and illegal methods to reconstruct the unsolved puzzle of a Treasury chief's murder.",
    image: "https://m.media-amazon.com/images/M/MV5BNWYxN2Q3MzktZmYwOS00MWU3LTkyNGUtNGY4MGQ4OTMxZmM2XkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 2,
    title: "Thunderbolts",
    date: "Coming May 2",
    description: "After finding themselves ensnared in a death trap, an unconventional team of antiheroes must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    image: "https://upload.wikimedia.org/wikipedia/en/9/90/Thunderbolts%2A_poster.jpg"
  }
];

export default function ComingSoonScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.comingsoonText}>Coming Soon</Text>
      </View>

      {COMING_SOON.map((movie) => (
        <View key={movie.id} style={styles.movieContainer}>
          <Image source={{ uri: movie.image }} style={styles.movieImage} />
          <View style={styles.movieInfo}>
            <Text style={styles.date}>{movie.date}</Text>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.description}>{movie.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    gap: 10,
  },
  comingsoonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
  movieContainer: {
    marginBottom: 30,
  },
  movieImage: {
    width: '100%',
    height: 200,
  },
  movieInfo: {
    padding: 20,
  },
  date: {
    color: '#666',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 5,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    marginBottom: 10,
  },
  description: {
    color: '#999',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
  },
});