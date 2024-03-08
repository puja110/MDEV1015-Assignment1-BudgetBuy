import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import TableCells from "../../../views/components/TableCells";
import BudgetBuyData from "../../../models/BudgetBuyData";

interface Item {
    profilePicture: ImageSourcePropType;
    name: string;
    location: string;
    productImage: ImageSourcePropType;
    itemName: string;
    itemPrice: string;
    year: number;
  }
  
  const populateCells = ({ item }: { item: Item }) => (
    <TableCells
      profilePicture={item.profilePicture}
      name={item.name}
      location={item.location}
      productImage={item.productImage}
      itemName={item.itemName}
      itemPrice={item.itemPrice}
      year={item.year}
    />
  );
  


const HomePage: React.FC = () => {
  return (
    <SafeAreaView style={styles.overlayContainer}>
      {/* <StatusBar barStyle="black" /> */}
      <View style={{ width: "auto" }}>
        <View style={{ paddingLeft: 15, paddingBottom: 5, paddingRight: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 10,
            }}
          >
            <Text style={styles.HomeText}>Welcome to BudgetBuy!</Text>
            <TouchableOpacity style={styles.mailIcon}>
              <Icon name="message" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center", paddingBottom: 10 }}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Search for books, guitar and more...."
            />
            <Icon name="search" color="#b5b2ae" size={25} style={styles.icon} />
          </View>
        </View>

        <View style={styles.catergoryButtons}>
          <TouchableOpacity onPress={() => {}} style={styles.iconButtons}>
            <Text style={styles.catergoryButtonsText}> Mobile </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.iconButtons}>
            <Text style={styles.catergoryButtonsText}> Watch </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.iconButtons}>
            <Text style={styles.catergoryButtonsText}> Books </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.iconButtons}>
            <Text style={styles.catergoryButtonsText}> Laptop </Text>
          </TouchableOpacity>
        </View>

        <View>
        <FlatList<Item> data={BudgetBuyData} renderItem={populateCells} />
        </View>
      </View>
     </SafeAreaView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  HomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  mailIcon: {
    marginTop: 26,
    marginRight: 10,
  },
  iconButtons: {
    backgroundColor: "black",
    borderWidth: 8,
    borderRadius: 10,
    width: 80,
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: "center",
    height: 40,
  },

  catergoryButtons: {
    flexDirection: "row",
    paddingTop: 1,
    justifyContent: "space-between",
    padding: 20,
    width: "auto",
  },

  catergoryButtonsText: {
    color: "white",
    paddingBottom: 3,
  },
  icon: {
    marginRight: 10,
  },

  messageIcon: {
    paddingLeft: 20,
  },

  overlayContainer: {
    flex: 1,
    paddingBottom: 280,
  },

  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ed930c",
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    width: 380,
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 16,
    justifyContent: "center",
    paddingLeft: 10,
  },
//   icon: {
//     marginTop: 2,
//   },
});
