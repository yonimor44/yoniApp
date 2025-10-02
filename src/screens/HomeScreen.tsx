// Home screen: fetch posts and render a list
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchPosts } from '../api/posts'; // API
import PostItem from '../components/PostItem'; // List item
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { globalStyles } from '../styles/globalStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [posts, setPosts] = useState<any[]>([]); // data
  const [loading, setLoading] = useState(true); // loading
  const [error, setError] = useState<string | null>(null); // error

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

    // Centered loading/error using globalStyles.center
  if (loading) return <ActivityIndicator style={globalStyles.center} />;
  if (error) return <Text style={globalStyles.center}>Error: {error}</Text>;

    // FlatList essentials:
  // - data: array to render
  // - keyExtractor: stable key per item
  // - contentContainerStyle: list padding
  // - renderItem: renderer for each row
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={globalStyles.container} // basic padding
      renderItem={({ item }) => (
        <PostItem
          title={item.title}
          body={item.body}
          onPress={() =>
            navigation.navigate('Details', { title: item.title, body: item.body })
          }
        />
      )}
    />
  );
}

