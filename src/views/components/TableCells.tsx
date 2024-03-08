import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TableCellsProps {
  profilePicture: ImageSourcePropType;
  name: string;
  location: string;
  productImage: ImageSourcePropType;
  itemName: string;
  itemPrice: string;
  year: number;
}

const TableCells: React.FC<TableCellsProps> = ({
  profilePicture,
  name,
  location,
  productImage,
  itemName,
  itemPrice,
  year,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={profilePicture} style={styles.profilePicture} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>

        <TouchableOpacity style={styles.favoriteButton}>
          <Icon name="favorite" size={20} color="red" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="more-vert" size={30} color="gray" />
        </TouchableOpacity>
      </View>

      <View>
        <Image source={productImage} style={styles.productImage} />
      </View>

      <View style={styles.bottomSection}>
        <View>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text style={styles.yearText}> {year} </Text>
        </View>
        <Text style={styles.itemPrice}>{itemPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
  },
  topSection: {
    flexDirection: "row",
  },
  profilePicture: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 16,
    color: "gray",
    paddingLeft: 4,
  },
  productImage: {
    width: "100%",
    backgroundColor: "yellow",
    height: 250,
    marginTop: 12,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "lightgray",
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
    paddingRight: 10,
  },
  yearText: {
    fontSize: 15,
    color: "gray",
  },
  favoriteButton: {
    // position: "absolute",
    right: 0,
    top: 0,
  },
});

export default TableCells;
