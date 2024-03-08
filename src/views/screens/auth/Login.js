// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
// import AuthController from '../controllers/AuthController';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     const { success, error } = await AuthController.signIn(email, password);
//     if (success) {
//       navigation.navigate('HomePage'); 
//     } else {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image  source={{ uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' }} style={styles.logoImage}/>
//       <TextInput 
//         style={styles.input} 
//         placeholder="Email" 
//         value={email} 
//         onChangeText={setEmail} 
//       />
//       <TextInput 
//         style={styles.input} 
//         placeholder="Password" 
//         secureTextEntry={true} 
//         value={password} 
//         onChangeText={setPassword} 
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//         <Text style={styles.registerLink}>Don't have an account? Register here</Text>
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

// export default Login;
