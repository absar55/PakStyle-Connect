import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { CartContext } from "../Context/CartContext";

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total +
      parseFloat(item.price.replace("₨", "").replace(",", "")) * item.quantity,
    0
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require("../../assets/icons/empty_cart.png")}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                    style={styles.quantityButton}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total: ₨{totalAmount.toFixed(2)}
            </Text>
          </View>
        </>
      )}
      {cartItems.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Check Out")}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  emptyIcon: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 20,
    color: "#7f8c8d",
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: "#7f8c8d",
  },
  quantityText: {
    fontSize: 18,
    color: "#34495e",
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  totalContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  totalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#34495e",
  },
  checkoutButton: {
    backgroundColor: "#2980b9",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
