import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity style={styles.bottomMenuButton}>
        <Text style={styles.menuIcon}>📋</Text>
        <Text style={styles.menuLabel}>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  bottomMenu: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomMenuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menuIcon: {
    fontSize: 18,
    color: 'white',
    marginRight: 5,
  },
  menuLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
})