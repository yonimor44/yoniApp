// Global navigation shell + screens graph
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function Main() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
