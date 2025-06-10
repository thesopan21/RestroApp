import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper/SafeAreaWrapper'
import { useTheme } from '@react-navigation/native'

const FeedScreen = () => {

  const { colors } = useTheme()

  return (
    <SafeAreaWrapper>
      <View style={{ backgroundColor: colors.background }}>
        <Text style={{ color: colors.text }}>this is cutome feed</Text>
      </View>
      <Text style={{ color: colors.text }}>FeedScreen</Text>
    </SafeAreaWrapper>
  )
}

export default FeedScreen

const styles = StyleSheet.create({})