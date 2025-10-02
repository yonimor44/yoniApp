// Details screen: shows title and body passed via navigation
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { globalStyles } from '../styles/globalStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;  // typed navigation

export default function DetailsScreen({ route }: Props) {
  const { title, body } = route.params; // params

   // Use globalStyles for padding and title
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.title, { marginBottom: 12 }]}>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
}

