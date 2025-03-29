import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const INTRO = {
  title: 'Genre',
};

const DATA = [
  {
    category: 'Action',
    content: [
      'https://upload.wikimedia.org/wikipedia/id/thumb/b/b6/Ne_Zha_2_poster.jpg/250px-Ne_Zha_2_poster.jpg',
      'https://awsimages.detik.net.id/community/media/visual/2025/03/26/a-working-man-1742965076914_34.jpeg?w=1200',
      'https://m.media-amazon.com/images/M/MV5BMDRiNTBlY2EtZmRiZC00Mzc4LTljZDctNWQ5ZGY2NjUwNjE4XkEyXkFqcGc@._V1_.jpg',
      'https://upload.wikimedia.org/wikipedia/id/3/35/Gyeongseong_Creature_poster.jpg',
    ],
  },
  {
    category: 'Comedy',
    content: [
      'https://upload.wikimedia.org/wikipedia/id/0/01/Poster_Agak_Laen_%282024%29.jpg',
      'https://awsimages.detik.net.id/community/media/visual/2024/05/31/poster-catatan-harian-menantu-sinting.jpeg?w=1200',
      'https://upload.wikimedia.org/wikipedia/id/5/50/Poster_Kaka_Boss_%282024%29.jpg',
      'https://upload.wikimedia.org/wikipedia/id/b/ba/Beetlejuice_Beetlejuice_poster.jpg',
    ],
  },
  {
    category: 'Horror',
    content: [
      'https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      'https://upload.wikimedia.org/wikipedia/id/thumb/b/bc/Abigail_Official_Poster.jpg/220px-Abigail_Official_Poster.jpg',
      'https://upload.wikimedia.org/wikipedia/id/c/ce/Poster_Kang_Mak.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTE3MjgwYWEtNzdlNi00ZjQyLThmZTAtZWYwYjMzZmMwODAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    ],
  },
  {
    category: 'Drama',
    content: [
      'https://upload.wikimedia.org/wikipedia/id/2/2b/Poster_Ancika_-_Dia_yang_Bersamaku_1995_%282024%29.jpg',
      'https://upload.wikimedia.org/wikipedia/id/5/51/Queen_of_Tears_Main_Poster.png',
      'https://awsimages.detik.net.id/community/media/visual/2024/05/15/sinopsis-how-to-make-millions-before-grandma-dies-film-thailand-penuh-haru-tayang-hari-ini.jpeg?w=1200',
      'https://m.media-amazon.com/images/M/MV5BYmQwNzRiNmItODc4Ny00Mjk4LThmYWQtNjI5OGU4OGUxMmY0XkEyXkFqcGc@._V1_QL75_UY281_CR1,0,190,281_.jpg',
    ],
  },
];

export default function genre() {
  const navigateTo = (path: string) => {
      router.push('/details/MovieDetails');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.featured]}>
        <View style={styles.featuredContent}>
          <Text style={styles.featuredTitle}>{INTRO.title}</Text>
        </View>
      </View>

      {DATA.map(({ category, content }) => (
        <View
          key={category}
          style={[styles.section]}
        >
          <Text style={styles.sectionTitle}>{category}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.movieList}>
            {content.map((item, index) => (
              <TouchableOpacity key={index} style={styles.movieCard} onPress={() => navigateTo('/details/MovieDetails')}>
                <Image source={{ uri: item }} style={styles.movieImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  featured: {
    height: 150,
    position: 'relative',
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