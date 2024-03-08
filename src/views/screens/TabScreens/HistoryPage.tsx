import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HistoryData from "../../../models/HistoryData";
import { StatusBar } from "react-native";
import HistoryItem from "../../../views/components/HistoryItem";

interface HistoryItemData {
  id: number;
  itemName: string;
  itemImage: ImageSourcePropType;
  itemPrice: string;
  views: number;
  date: string;
}

const renderItems = ({ item }: { item: HistoryItemData }) => (
  <HistoryItem
    itemName={item.itemName}
    itemImage={item.itemImage}
    itemPrice={item.itemPrice}
    views={item.views}
    date={item.date}
  />
);

const HistoryPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Post History</Text>
      </View>
      <FlatList
        data={HistoryData}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 14,
    marginTop: 20,
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
});

export default HistoryPage;
