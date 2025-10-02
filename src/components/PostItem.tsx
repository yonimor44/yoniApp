// Tappable list item: shows title and preview
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  title: string; // title
  body: string;  // preview
  onPress: () => void; // on press
}

export default function PostItem({ title, body, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={globalStyles.card}>
      <Text style={[globalStyles.titleSm, { marginBottom: 4 }]}>{title}</Text>
      <Text numberOfLines={2}>{body}</Text>
    </Pressable>
  );
}

