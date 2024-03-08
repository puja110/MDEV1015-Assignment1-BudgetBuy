import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import AuthController from '../../../controller/AuthController';

export type RootStackParamList = {
  MainOnboarding: undefined;
  SecondOnboarding: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  SignUpScreen: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface SignUpScreenProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { success, error } = await AuthController.signUp(email, password);

    if (success) {
      // Navigate to Login screen if registration is successful
      navigation.navigate('Login');
    } else {
      handleRegisterError(error)
      console.error(error);
    }
  };
  
  const handleRegisterError = (error) => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert("Email address is already in use!");
    }

    if (error.code === 'auth/weak-password') {
      Alert.alert("Enter the valid password!");
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert("Email address is invalid!");
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/authenticationBackground.jpeg')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.inputContainer}>
            <Text style={styles.signupText}>Sign up</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Email Address" 
              value={email}
              onChangeText={val => setEmail(val)}
              />
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Password"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={val => setPassword(val)}
              />
              <TouchableOpacity
                style={styles.passwordIcon}
                onPress={() => setHidePassword(!hidePassword)}
              >
                <Ionicons name={hidePassword ? "eye" : "eye-off"} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.createAccountButton}
              onPress={() => handleRegister()}
              >
              <Text style={styles.createAccountButtonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.haveAccountView}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginText}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    width: "85%",
    padding: 2,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  signupText: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 0.8,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#ededed",
  },
  inputPassword: {
    flex: 1,
    height: 50,
    borderColor: "gray",
    borderWidth: 0.8,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#ededed",
  },
  createAccountButton: {
    height: 50,
    backgroundColor: "#DEC109",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  createAccountButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  haveAccountView: {
    flexDirection: "row",
    paddingTop: 14,
    justifyContent: "center",
  },
  loginText: {
    textDecorationLine: "underline",
    color: "#DEC109",
    marginLeft: 5,
  },
  inputTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  passwordIcon: {
    position: "absolute",
    right: 10,
    zIndex: 1,
  },
});

export default SignUpScreen;
