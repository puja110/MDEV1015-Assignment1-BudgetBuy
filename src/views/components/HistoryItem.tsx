import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface HistoryItemProps {
  itemName: string;
  itemImage: ImageSourcePropType;
  itemPrice: string;
  views: number;
  date: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
  itemName,
  itemImage,
  itemPrice,
  views,
  date,
}) => {
  return (
    <View style={styles.container}>
        <Image source={itemImage} style={styles.itemImage} />
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{itemName}</Text>
            <View style={styles.viewsContainer}>
                <Text style={styles.viewsText}>Views: {views}</Text>
            </View>
            <View style={styles.priceDateContainer}>
                <Text style={styles.priceText}>{itemPrice}</Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 6,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewsContainer: {
    flexDirection: 'row'
  },
  viewsText: {
    fontSize: 14,
    paddingVertical: 6
  },
  priceDateContainer: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  priceText: {
    fontSize: 14,
    color: "green"
  },
  dateText: {
    fontSize: 14,
    color: 'red'
  },
});

export default HistoryItem;
