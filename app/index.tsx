import { View, Text, StyleSheet, Platform } from 'react-native'
import PokemonCards from '@/Components/PokemonCards'

export default function index() {
  return (
    <View style={styles.container}>
      <PokemonCards />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
})