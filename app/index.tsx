import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native'
import PokemonCards from '@/Components/PokemonCards'

export default function index() {

  const charmanderData = {
    name: "Charmander",
    image: require("@/assets/images/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCards {...charmanderData} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
})