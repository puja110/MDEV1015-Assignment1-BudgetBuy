import auth from '@react-native-firebase/auth';
 
const AuthController = {
  signIn: async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
 
  signUp: async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  signOut: async () => {
    try {
      await auth().signOut();
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};
 
export default AuthController;