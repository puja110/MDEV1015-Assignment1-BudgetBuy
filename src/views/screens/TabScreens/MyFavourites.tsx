import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MyFavourites({}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.heading}>Favourites</Text>
      </View>
      <ScrollView>
        <View style={styles.box}>
          <Image
            source={require('../../../../assets/goldIphone.png')}
            style={styles.productImage}
          />
          <View style={styles.list}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Jabra Wireless Earbuds
            </Text>
            <Text
              style={{ fontSize: 14, color: "#c68ca3", paddingVertical: 6 }}
            >
              03 May 2021
            </Text>
            <Text style={{ fontSize: 14, color: "#17858f" }}>CAD $19.00</Text>
          </View>
          <View style={{ position: "absolute", right: 10, bottom: 12 }}>
            <Ionicons name="heart" size={28} color="red" />
          </View>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../../../../assets/goldIphone.png')}
            style={styles.productImage}
          />
          <View style={styles.list}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Macbook Air
            </Text>
            <Text
              style={{ fontSize: 14, color: "#c68ca3", paddingVertical: 6 }}
            >
              20 Apr 2021
            </Text>
            <Text style={{ fontSize: 14, color: "#17858f" }}>CAD $350.00</Text>
          </View>
          <View style={{ position: "absolute", right: 10, bottom: 12 }}>
            <Ionicons name="heart" size={28} color="red" />
          </View>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../../../../assets/goldIphone.png')}
            style={styles.productImage}
          />
          <View style={styles.list}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Amazon Alexa
            </Text>
            <Text
              style={{ fontSize: 14, color: "#c68ca3", paddingVertical: 6 }}
            >
              14 Apr 2021
            </Text>
            <Text style={{ fontSize: 14, color: "#17858f" }}>CAD $9.00</Text>
          </View>
          <View style={{ position: "absolute", right: 10, bottom: 12 }}>
            <Ionicons name="heart" size={28} color="red" />
          </View>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../../../../assets/goldIphone.png')}
            style={styles.productImage}
          />
          <View style={styles.list}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>LG Monitor</Text>
            <Text
              style={{ fontSize: 14, color: "#c68ca3", paddingVertical: 6 }}
            >
              13 Apr 2021
            </Text>
            <Text style={{ fontSize: 14, color: "#17858f" }}>CAD $90.00</Text>
          </View>
          <View style={{ position: "absolute", right: 10, bottom: 12 }}>
            <Ionicons name="heart" size={28} color="red" />
          </View>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../../../../assets/goldIphone.png')}
            style={styles.productImage}
          />
          <View style={styles.list}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Google Home Mini
            </Text>
            <Text
              style={{ fontSize: 14, color: "#c68ca3", paddingVertical: 6 }}
            >
              12 Apr 2021
            </Text>
            <Text style={{ fontSize: 14, color: "#17858f" }}>CAD $12.00</Text>
          </View>
          <View style={{ position: "absolute", right: 10, bottom: 12 }}>
            <Ionicons name="heart" size={28} color="red" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headContainer: {
    marginTop: 15,
    marginLeft: 20,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  productImage: {
    backgroundColor: "#c4c4c4",
    borderRadius: 10,
    height: 80,
    width: 90,
    padding: 10,
    marginRight: 6,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
    marginStart: 10,
    height: "auto",
  },
  box: {
    backgroundColor: "#ffeed5",
    borderRadius: 15,
    flexDirection: "row",
    padding: 15,
    paddingBottom: 10,
    paddingTop: 10,
    margin: 10,
    position: "relative",
  },
  list: {
    marginLeft: 5,
    padding: 5,
    justifyContent: "space-evenly",
    width: 175,
  },
});
