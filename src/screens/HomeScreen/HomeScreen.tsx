import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper/SafeAreaWrapper'
import ThemedView from '../../components/ThemedView/ThemedView'
import ThemedText from '../../components/ThemedText/ThemedText'

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemedText style={{ fontSize: 18 }}>Home Screen</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>Welcome to Themed View!</ThemedText>
      </ThemedView>
    </SafeAreaWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})