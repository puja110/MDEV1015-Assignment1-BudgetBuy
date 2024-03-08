import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

type RootStackParamList = {
  Login: undefined; 
};

type SecondOnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface SecondOnboardingScreenProps {
  navigation: SecondOnboardingScreenNavigationProp;
}

const SecondOnboardingScreen: React.FC<SecondOnboardingScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.onboardingFirstImage}
        source={require('../../../assets/firstImage.jpeg')}
      />

      <Text style={styles.appNametext}> Budget Buy </Text>

      <View style={styles.onboardingSecondImageContainer}>
        <Image
          style={styles.onboardingSecondImage}
          source={require('../../../assets/secondOnboarding.png')}

          />
      </View>

      <Text style={styles.onboardingTitleText}> BROWSE OUR COLLECTIONS: </Text>

      <Text style={styles.onboardingMessageText}>
        Dive into our curated collections featuring high quality second hand
        product.
      </Text>

      <View style={styles.progressAndArrowView}>
        <View style={styles.progessLineContainer}>
          <View style={styles.progressLine}></View>
          <View style={styles.progressLine}></View>
        </View>

        <TouchableOpacity style={styles.roundBorder} onPress={()=> navigation.push('Login')}>
          <View style={styles.arrowContainer}>
            <Image
              style={styles.arrowImage}
              source={require('../../../assets/arrowRight.png')}

            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'white'
  },
  onboardingFirstImage: {
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
    paddingTop: 35,
    paddingBottom: 30,
  },
  onboardingSecondImage: {
    width: 280,
    height: 280,
  },
  onboardingTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#faa543",
  },
  onboardingMessageText: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 10,
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
    padding: 20,
  },
});

export default SecondOnboardingScreen;
