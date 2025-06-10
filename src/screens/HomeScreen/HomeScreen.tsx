import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper/SafeAreaWrapper'
import ThemedView from '../../components/ThemedView/ThemedView'
import ThemedText from '../../components/ThemedText/ThemedText'
import AppHeader from '../../components/AppHeader/AppHeader'
import CouponCard from '../../components/CouponCard/CouponCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import Footer from '../../components/Footer/Footer'
import { NonVegIcon, VegIcon } from '../../assets/images'
import ItemCard from '../../components/ItemCard/ItemCard'

const { width } = Dimensions.get('window');

const bannerImages = [
  'https://cdn.dummyjson.com/recipe-images/1.webp',
  'https://cdn.dummyjson.com/recipe-images/2.webp',

  'https://cdn.dummyjson.com/recipe-images/3.webp',
  'https://cdn.dummyjson.com/recipe-images/4.webp',
];

const categories = [
  { uri: NonVegIcon, category: 'Non Veg' },
  { uri: VegIcon, category: 'Best Seller' },
  { uri: NonVegIcon, category: 'Egg' },
  { uri: VegIcon, category: 'Veg' }
];

const products = [
  { id: '1', uri: 'https://cdn.dummyjson.com/recipe-images/2.webp', name: 'Croissant' },
  { id: '2', uri: 'https://cdn.dummyjson.com/recipe-images/1.webp', name: 'Tiramisu' },
  { id: '3', uri: 'https://cdn.dummyjson.com/recipe-images/2.webp', name: 'Bread' },
  { id: '4', uri: 'https://cdn.dummyjson.com/recipe-images/1.webp', name: 'Bun' },
  { id: '5', uri: 'https://cdn.dummyjson.com/recipe-images/2.webp', name: 'Croissant' },
  { id: '6', uri: 'https://cdn.dummyjson.com/recipe-images/1.webp', name: 'Tiramisu' },
  { id: '7', uri: 'https://cdn.dummyjson.com/recipe-images/2.webp', name: 'Bread' },
  { id: '8', uri: 'https://cdn.dummyjson.com/recipe-images/1.webp', name: 'Bun' },
];

const item = [
  {
    id: '1',
    name: 'Croissant',
    price: '195.00',
    image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
    badges: ['Veg', 'Egg', 'Best Seller'],
    description: 'Product Description',
  },
  {
    id: '2',
    name: 'Eggless Croissant',
    price: '195.00',
    image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
    badges: ['Veg', 'Best Seller'],
    description: 'Product Description',
  },
  {
    id: '3',
    name: 'Almond Croissant 2.0',
    price: '195.00',
    image: 'https://cdn.dummyjson.com/recipe-images/13.webp',
    badges: ['Veg', 'Egg', 'Best Seller'],
    description: 'Product Description',
  },
];

const couponArr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]


const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBanner}>
          <Text style={styles.bannerText}>Flat 20% OFF above Rs 200</Text>
        </View>

        <AppHeader />

        <FlatList
          data={bannerImages}
          horizontal
          pagingEnabled
          contentContainerStyle={{
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.bannerImage} />
          )}
        />

        <ScrollView
          horizontal={true}
          contentContainerStyle={{ paddingRight: 80 }}
          showsHorizontalScrollIndicator={false}
        >
          {
            couponArr.map((item) => (
              <CouponCard key={item.id} />
            ))
          }
        </ScrollView>

        <SearchBar />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ padding: 1 }}>
            <Text style={{ fontSize: 24 }}>☰</Text>
          </TouchableOpacity>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {categories.map((cat, index) => (
              <View key={index} style={styles.categoryChip}>
                <Image
                  source={cat.uri}
                  style={{
                    width: 20,
                    height: 20
                  }}
                />
                <Text>{cat.category}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={styles.productList}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.uri }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
            </View>
          )}
        />

        <View>
          <Text style={styles.sectionTitle}>Croissant</Text>
          {
            item.map((item) => (
              <ItemCard item={item} key={item.id}/>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
    paddingHorizontal: 12,
  },
  topBanner: {
    backgroundColor: 'red',
    padding: 8,
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  bannerImage: {
    width: width,
    height: width * 0.6,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  categoryScroll: {
    marginVertical: 10,
    paddingHorizontal: 6,
  },
  categoryChip: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginRight: 8,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#80808060'
  },

  productList: {
    paddingHorizontal: 10,
    gap: 12
  },
  productCard: {
    marginRight: 12,
    alignItems: 'center',
    borderRadius: 12
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 5,
  },
  productName: {
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
})