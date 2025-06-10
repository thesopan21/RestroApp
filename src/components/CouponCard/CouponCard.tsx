import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DiscountIcon } from '../../assets/images';

const CouponCard = () => {
  return (
    <View style={styles.offerCard}>
      <Image
        source={DiscountIcon}
        style={styles.logo}
      />
      <View>
        <Text style={styles.offerTitle}>Flat 20% OFF</Text>
        <Pressable style={{
          flexDirection: 'row',
          alignItems:'center'
        }}>
          <Text style={styles.offerCode}>Use Code: </Text>
          <Text style={[styles.offerCode, styles.code]}>EPICPARTY</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CouponCard;

const styles = StyleSheet.create({
  offerCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: 'red',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  logo: {
    width: 24,
    height: 24,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerCode: {
    color: 'black',
    marginTop: 5,
  },
  code:{
    color:'red',
    borderWidth: 1,
    borderRadius: 6,
    padding: 4,
    borderStyle:'dashed',
    borderColor:'red',
    backgroundColor:'#80808020'
  }
})