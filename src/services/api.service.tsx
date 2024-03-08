import auth from '@react-native-firebase/auth';

export function signUpUser(email, password): Promise<any> {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signInUser(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}