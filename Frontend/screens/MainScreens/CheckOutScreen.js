import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert, // Import Alert component
} from "react-native";
import { RadioButton } from "react-native-paper";
import { CartContext } from "../Context/CartContext";

const CheckOutScreen = ({ navigation }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Credit Card");
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const { removeAllItems } = useContext(CartContext);

  const handlePayment = () => {
    Alert.alert(
      "Confirm Payment",
      "Are you sure you want to proceed with the payment?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Proceed",
          onPress: () => {
            console.log("Selected payment method:", selectedPaymentMethod);
            if (selectedPaymentMethod === "Credit Card") {
              console.log("Credit card details:", creditCardDetails);
              removeAllItems();
              navigation.navigate("Cart");
            } else if (selectedPaymentMethod === "Cash on Delivery") {
              removeAllItems();
              navigation.navigate("Cart");
            }
          },
        },
      ]
    );
  };

  const handleBack = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <RadioButton.Group
        onValueChange={(value) => setSelectedPaymentMethod(value)}
        value={selectedPaymentMethod}
      >
        <View style={styles.optionContainer}>
          <RadioButton.Item label="Credit Card" value="Credit Card" />
        </View>
        <View style={styles.optionContainer}>
          <RadioButton.Item label="Cash on Delivery" value="Cash on Delivery" />
        </View>
      </RadioButton.Group>

      {selectedPaymentMethod === "Credit Card" && (
        <View style={styles.cardDetailsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            onChangeText={(text) =>
              setCreditCardDetails({ ...creditCardDetails, cardNumber: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date"
            onChangeText={(text) =>
              setCreditCardDetails({ ...creditCardDetails, expiryDate: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            onChangeText={(text) =>
              setCreditCardDetails({ ...creditCardDetails, cvv: text })
            }
          />
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  optionContainer: {
    marginVertical: 10,
  },
  cardDetailsContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default CheckOutScreen;
