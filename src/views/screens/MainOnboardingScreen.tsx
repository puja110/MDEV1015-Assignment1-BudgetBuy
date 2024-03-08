import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";


type RootStackParamList = {
  MainOnboardingScreen: undefined; 
  SecondOnboardingScreen: undefined; 
  Login: undefined;
};

type MainOnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainOnboardingScreen'>;

interface MainOnboardingScreenProps {
  navigation: MainOnboardingScreenNavigationProp;
}

const MainOnboardingScreen: React.FC<MainOnboardingScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.firstImage}
        source={require('../../../assets/firstImage.jpeg')}
        />
      <Text style={styles.appNametext}> Budget Buy </Text>
      <View style={styles.onboardingSecondImageContainer}>
        <Image
          style={styles.onboardingSecondImage}
          source={require('../../../assets/secondImage.jpeg')}
          />
      </View>
      <Text style={styles.onboardingTitleText}> PERSONALIZED RECOMMENDATION: </Text>
      <Text style={styles.onboardingMessageText}>
        The more you browse and engage, the better we can tailor our recommendation
      </Text>
      <View style={styles.progressAndArrowView}>
        <View style={styles.progessLineContainer}>
          <View style={styles.progressLine}></View>
          <View style={styles.progressLineTwo}></View>
        </View>
        <TouchableOpacity style={styles.roundBorder} onPress={() => navigation.push('SecondOnboardingScreen')}>
          <View style={styles.arrowContainer}>
            <Image
              style={styles.arrowImage}
              source={require('../../../assets/arrowRight.png')}
              />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={styles.textSkip}> Skip </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'white'
  },
  firstImage: {
    width: "100%",
    height: 180,
    marginBottom: 10,
  },
  appNametext: {
    fontSize: 35,
    fontWeight: "700",
    marginTop: 10,
    color: "#faa543",
  },
  onboardingSecondImageContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 26,
    paddingBottom: 26,
  },
  onboardingSecondImage: {
    width: 275,
    height: 275,
  },
  onboardingTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#faa543",
    paddingBottom: 12,
  },
  onboardingMessageText: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
    paddingBottom: 15,
    marginHorizontal: 16
  },
  progessLineContainer: {
    flexDirection: "row",
    marginTop: 10,
    padding: 5,
  },
  progressLine: {
    width: 40,
    height: 7,
    backgroundColor: "#f0a44d",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  progressLineTwo: {
    width: 40,
    height: 7,
    backgroundColor: "gray",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  
  roundBorder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#e3e1de",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0a44d",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowImage: {
    width: 30,
    height: 30,
  },
  progressAndArrowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  textSkip: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default MainOnboardingScreen;
