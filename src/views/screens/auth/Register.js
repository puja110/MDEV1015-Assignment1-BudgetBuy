// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; 

// import AuthController from '../controllers/AuthController';

// const Register = () => {
//   const navigation = useNavigation(); 

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     const { success, error } = await AuthController.signUp(email, password);
//     if (success) {
//       // Navigate to Login screen if registration is successful
//       navigation.navigate('Login');
//     } else {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' }} style={styles.logoImage}/>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={text => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={text => setPassword(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.registerLink}>Already have an account? Login here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     width: '80%',
//     backgroundColor: '#eeeeee',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   button: {
//     width: '80%',
//     backgroundColor: 'orange',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   registerLink: {
//     marginTop: 20,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   logoImage: {
//     marginBottom: 20,
//     borderRadius: 100,
//     height: 170,
//     width: 170
//   }
// });

// export default Register;
