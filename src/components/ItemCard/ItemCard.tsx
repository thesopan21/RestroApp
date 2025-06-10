import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemCard = ({ item }: any) => {
  console.log(item.image)
  return (
    <>
      <View style={styles.productCard}>
        <Image source={{ uri: item.image}} style={styles.productImage} />

        <View style={styles.productInfo}>
          <View style={styles.badgesRow}>
            {item.badges.map((badge: any, index: number) => (
              <View key={index} style={styles.badge}>
                <Text style={styles.badgeText}>{badge}</Text>
              </View>
            ))}
            <Text style={styles.chefIcon}>👨‍🍳</Text>
          </View>

          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productSubTitle}>Croissant</Text>

          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Text key={index} style={styles.star}>
                ☆
              </Text>
            ))}
          </View>
        </View>
      </View>


      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.productDescription}>{item.description}</Text>
        </View>

        <View style={{flexDirection:'row', gap: 12, alignItems:'center'}}>
          <Text style={styles.price}>Rs {item.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        width: '100%',
        height: 1,
        backgroundColor: '#80808060',
        marginVertical: 10
      }}></View>
    </>
  )
}

export default ItemCard

const styles = StyleSheet.create({
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 2,
    padding: 10,
    borderRadius: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  productInfo: {

  },
  badgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: '#ffb09c',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  chefIcon: {
    marginLeft: 4,
    fontSize: 16,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productSubTitle: {
    fontStyle: 'italic',
    color: '#666',
    fontSize: 14,
  },
  starsRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  star: {
    color: '#ccc',
    fontSize: 20,
    marginRight: 2,
  },
  productDescription: {
    fontSize: 13,
    color: '#444',
    marginBottom: 5,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    paddingVertical: 10,
    alignItems: 'center',
  },
  bottomMenuButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomMenuText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})