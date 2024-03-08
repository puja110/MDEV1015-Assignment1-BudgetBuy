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
import { validateEmail } from '../../../helpers';
import { signUpUser } from '../../../services/api.service';

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
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleRegister() {
    if (email.length <= 0) {
      Alert.alert('Please enter a email');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Please enter a valid email');
      return;
    }
    if (password.length <= 0) {
      Alert.alert('Please enter a password');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Please confirm password');
      return;
    }

    signUpUser(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert('Success, please login');
        navigation.goBack();
      })
      .catch(error => {
        handleRegisterError(error)
        console.error(error);
      });

    return;
  }

  const handleRegisterError = (error) => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert("Email address is already in use!");
    }

    if (error.code === 'auth/weak-password') {
      Alert.alert("Enter the strong password!");
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
              placeholderTextColor={'grey'}
              value={email}
              onChangeText={val => setEmail(val)}
              />
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Password"
                placeholderTextColor={'grey'}
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

            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Confirm Password"
                placeholderTextColor={'grey'}
                secureTextEntry={hideConfirmPassword}
                value={confirmPassword}
                onChangeText={val => setConfirmPassword(val)}
              />
              <TouchableOpacity
                style={styles.passwordIcon}
                onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
              >
                <Ionicons name={hideConfirmPassword ? "eye" : "eye-off"} size={24} color="gray" />
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
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
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
    marginTop: 32,
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
    marginTop: 20,
  },
  passwordIcon: {
    position: "absolute",
    right: 10,
    zIndex: 1,
  },
});

export default SignUpScreen;
