import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search for a dish"
        style={styles.searchInput}
      />
      <Text style={styles.searchIcon}>🔍</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    fontSize: 16,
  },
})