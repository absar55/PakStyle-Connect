import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CartContext } from "../Context/CartContext";

const ItemScreen = ({ route }) => {
  const { item } = route.params;
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      ...item,
      selectedSize,
      selectedColor,
      quantity: selectedQuantity,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.optionsContainer}>
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Size:</Text>
            <Picker
              selectedValue={selectedSize}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedSize(itemValue)}
            >
              <Picker.Item label="S" value="S" />
              <Picker.Item label="M" value="M" />
              <Picker.Item label="L" value="L" />
              <Picker.Item label="XL" value="XL" />
            </Picker>
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Color:</Text>
            <Picker
              selectedValue={selectedColor}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedColor(itemValue)}
            >
              <Picker.Item label="Black" value="Black" />
              <Picker.Item label="White" value="White" />
              <Picker.Item label="Red" value="Red" />
              <Picker.Item label="Blue" value="Blue" />
            </Picker>
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Quantity:</Text>
            <Picker
              selectedValue={selectedQuantity}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedQuantity(itemValue)}
            >
              {[...Array(10).keys()].map((num) => (
                <Picker.Item key={num} label={`${num + 1}`} value={num + 1} />
              ))}
            </Picker>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 10,
    lineHeight: 22,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 20,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  optionLabel: {
    fontSize: 18,
    color: "#2c3e50",
    marginRight: 10,
  },
  picker: {
    height: 50,
    flex: 1,
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: "#2980b9",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ItemScreen;
