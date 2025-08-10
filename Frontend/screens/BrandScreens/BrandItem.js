import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SectionList,
  Alert,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import reviewData from "../../data/reviewData.json";
import Icon from "react-native-vector-icons/FontAwesome";

const BrandItem = ({ route }) => {
  const { item } = route.params;

  const [itemName, setItemName] = useState(item.name);
  const [itemDescription, setItemDescription] = useState(item.description);
  const [itemPrice, setItemPrice] = useState(item.price);

  const [modalVisible, setModalVisible] = useState(false);

  const itemReviews = reviewData.filter(
    (review) => review.brandId === item.id && review.brand === item.brand
  );

  const sections = [
    {
      title: "Details",
      data: [
        {
          ...item,
          name: itemName,
          description: itemDescription,
          price: itemPrice,
        },
      ],
    },
    { title: "Reviews", data: itemReviews },
  ];

  const handleDeleteItem = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", onPress: () => deleteItem() },
      ],
      { cancelable: false }
    );
  };

  const handleEditItem = () => {
    setModalVisible(true);
  };

  const handleSaveEdit = () => {
    setModalVisible(false);
    setItemName(itemName.trim() || item.name);
    setItemDescription(itemDescription.trim() || item.description);
    setItemPrice(itemPrice.trim() || item.price);
  };

  const deleteItem = () => {
    console.log("Item deleted:", item);
  };

  const renderDetailItem = ({ item }) => (
    <View style={styles.detailContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.brand}>Brand: {item.brand}</Text>
    </View>
  );

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewUser}>{item.user}</Text>
      <Text style={styles.reviewText}>{item.review}</Text>
      <View style={styles.starContainer}>
        {Array.from({ length: item.stars }, (_, index) => (
          <Icon key={index} name="star" size={20} color="#ffd700" />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item, section }) =>
          section.title === "Details"
            ? renderDetailItem({ item })
            : renderReviewItem({ item })
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditItem}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteItem}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      {/* Edit Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Edit Item</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={itemName}
              onChangeText={setItemName}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={itemDescription}
              onChangeText={setItemDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={itemPrice}
              onChangeText={setItemPrice}
            />
            <View style={styles.buttonRow}>
              <Button title="Save" onPress={handleSaveEdit} />
              <Button
                title="Cancel"
                onPress={() => setModalVisible(false)}
                color="gray"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  contentContainer: {
    padding: 10,
    paddingBottom: 60,
  },
  detailContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
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
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 10,
  },
  brand: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#888",
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#444",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  reviewContainer: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  reviewText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  starContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "45%",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  // Modal content style
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default BrandItem;
