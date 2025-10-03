// App-wide reusable styles (keep UI consistent)
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: { padding: 16 },                               // base padding for screens/sections
  title: { fontSize: 20, fontWeight: '700' },               // primary title style
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' }, // centered layout (loading/error)
  card: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 8 }, // simple card for items/blocks
  titleSm: { fontWeight: 'bold' },                          // small title inside cards/lists
    footer: { marginTop: 6,  fontWeight: 'bold' , fontSize: 18, color: '#666', textAlign: 'center' },  // centered footer text for list credit
  footerContainer: { marginTop: 16, paddingBottom: 8 },   // spacing around footer
});
