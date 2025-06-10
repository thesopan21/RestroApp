import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ThemedView from '../ThemedView/ThemedView'
import ThemedText from '../ThemedText/ThemedText'
import MenuIcon from 'react-native-vector-icons/MaterialIcons'
import { DOULogo } from '../../assets/images'

const AppHeader = () => {
  return (
    <ThemedView style={{}}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={{ fontSize: 24 }}>☰</Text>
        </TouchableOpacity>
        <Image
          source={DOULogo}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.locationButton}>
          <Text style={{ fontSize: 24 }}>📍</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 8,
  },
  locationButton: {
    padding: 8,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
})