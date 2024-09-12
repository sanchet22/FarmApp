import React,{useEffect ,useState} from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity,Platform  } from "react-native";
import axios from 'axios';
const Home = () => {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://10.0.2.2:8000/products');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const iosUrl = 'http://localhost:5000';
    const androidUrl = 'http://10.0.2.2:8000/products';
    const url = Platform.OS === 'ios' ? iosUrl : androidUrl;
    (async () => {
      console.log("Fetching data...")
    const response = await axios.get(url);
     console.log(response,"response")
    })()
    }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Toshniwal <Text style={styles.orangeText}>Organic</Text> Farm
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products..."
          placeholderTextColor="#888"
        />
        <Image
          source={require('../assets/icons/search.png')} // Update with the correct path to your search icon
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.filterContainer}>
        <Image
          source={require('../assets/icons/filter.png')} // Update with the correct path to your filter icon
          style={styles.filterIcon}
        />
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Dairy Products</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Daily Vegetables</Text>
        </View>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>Daily Vegetables</Text>
        </View>
      </View>

      {/* Status Box below filter */}
      <View style={styles.statusBox}>
        <View style={styles.statusItem}>
          <Text style={styles.boldNumber}>2</Text>
          <Text style={styles.statusTextYellow}>New Orders</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.boldNumber}>100</Text>
          <Text style={styles.statusTextGreen}>Accepted Orders</Text>
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.boldNumber}>12</Text>
          <Text style={styles.statusTextRed}>Rejected Orders</Text>
        </View>
      </View>

      {/* Reduced Product Boxes */}
      <View style={styles.productContainer}>
        <View style={styles.productBox}>
          <Image
            source={require('../assets/images/product.png')} // Update with the correct path to your product image
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productText}>Green Product</Text>
            <Text style={styles.productDetails}>Rs. 25/-</Text>
            <Text style={styles.productDetails}>Weight: 250 gm</Text>
            <Text style={styles.productDetails}>Stock: 51 kg</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Image
                source={require('../assets/icons/edit.png')} // Update with the correct path to your edit icon
                style={styles.editIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Image
                source={require('../assets/icons/delete.png')} // Update with the correct path to your delete icon
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.productBox}>
          <Image
            source={require('../assets/images/product.png')} // Update with the correct path to your product image
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productText}>Green Product</Text>
            <Text style={styles.productDetails}>Rs. 25/-</Text>
            <Text style={styles.productDetails}>Weight: 250 gm</Text>
            <Text style={styles.productDetails}>Stock: 51 kg</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Image
                source={require('../assets/icons/edit.png')} // Update with the correct path to your edit icon
                style={styles.editIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Image
                source={require('../assets/icons/delete.png')} // Update with the correct path to your delete icon
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.productBox}>
          <Image
            source={require('../assets/images/product.png')} // Update with the correct path to your product image
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productText}>Green Product</Text>
            <Text style={styles.productDetails}>Rs. 25/-</Text>
            <Text style={styles.productDetails}>Weight: 250 gm</Text>
            <Text style={styles.productDetails}>Stock: 51 kg</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Image
                source={require('../assets/icons/edit.png')} // Update with the correct path to your edit icon
                style={styles.editIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Image
                source={require('../assets/icons/delete.png')} // Update with the correct path to your delete icon
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.productBox}>
          <Image
            source={require('../assets/images/product.png')} // Update with the correct path to your product image
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productText}>Green Product</Text>
            <Text style={styles.productDetails}>Rs. 25/-</Text>
            <Text style={styles.productDetails}>Weight: 250 gm</Text>
            <Text style={styles.productDetails}>Stock: 51 kg</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Image
                source={require('../assets/icons/edit.png')} // Update with the correct path to your edit icon
                style={styles.editIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Image
                source={require('../assets/icons/delete.png')} // Update with the correct path to your delete icon
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '5%', // Reduced padding top
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20, // Slightly smaller font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orangeText: {
    color: 'orange',
  },
  searchContainer: {
    width: '85%',
    height: 40, // Reduced height
    backgroundColor: '#f0f0f0',
    borderRadius: 15, // Reduced border radius
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Reduced top margin
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10, // Reduced padding
    fontSize: 14, // Slightly smaller font size
    color: '#333',
  },
  searchIcon: {
    width: 20, // Smaller icon
    height: 20, // Smaller icon
    marginRight: 10,
  },
  filterContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10, // Reduced top margin
  },
  filterIcon: {
    width: 25, // Smaller filter icon
    height: 25,
  },
  categoryBox: {
    flex: 1,
    height: 30, // Reduced height
    backgroundColor: '#f0f0f0',
    borderRadius: 15, // Reduced border radius
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 12, // Slightly smaller font size
    color: '#333',
  },

  statusBox: {
    width: '85%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10, // Reduced padding
    marginTop: 10, // Reduced top margin
    borderRadius: 25, // Slightly smaller border radius
    borderWidth: 2,
    borderColor: 'black',
  },
  statusItem: {
    alignItems: 'center',
  },
  boldNumber: {
    fontSize: 14, // Smaller font size
    fontWeight: 'bold',
    color: 'black',
  },
  statusTextYellow: {
    fontSize: 10, // Smaller font size
    color: 'yellow',
  },
  statusTextGreen: {
    fontSize: 10, // Smaller font size
    color: 'green',
  },
  statusTextRed: {
    fontSize: 10, // Smaller font size
    color: 'red',
  },

  productContainer: {
    width: '85%',
    marginTop: 10, // Reduced margin top
  },
  productBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10, // Reduced padding
    borderRadius: 0, // Slightly smaller border radius
    borderWidth: 2,
    borderColor: 'black',
  },
  productImage: {
    width: 70, // Smaller image size
    height: 70,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productText: {
    fontSize: 14, // Slightly smaller font size
    fontWeight: 'bold',
    color: 'green',
  },
  productDetails: {
    fontSize: 12, // Smaller font size
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    marginRight: -20,
    marginBottom:60
  },
  editIcon: {
    width: 20, // Smaller edit icon
    height: 20,
  },
  deleteButton: {
    marginRight: -0,
    marginBottom:-40
  },
  deleteIcon: {
    width: 20, // Smaller delete icon
    height: 20,
  },
});
