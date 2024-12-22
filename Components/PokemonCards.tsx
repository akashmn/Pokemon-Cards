import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

export default function PokemonCards() {
  return (
    <View style={styles.card}>
      <Text>Pokemon Cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius : 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowColor: '#333',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5
            }
        })
    }
})