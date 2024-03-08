import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const PostItem: React.FC = () => {

  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    alert("New item posted successfully")
  }
 
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Your new post</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Title"
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter category"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone number"
          value={price}
          onChangeText={setPrice}
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter address"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />
       
       <View style={styles.uploadImageContainer}>
            <Text style={styles.uploadImageTitle}>Choose Picture</Text>
            <TouchableOpacity style={styles.uploadImage}>
                <Icon name="add" size={40} color="grey" style={{ alignSelf: 'center' }}/>
            </TouchableOpacity>
      </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', 
    justifyContent: 'flex-start', 
    padding: 20, 
  },
  headingContainer: {
    width: '100%',
    flexDirection: 'column', 
    paddingBottom: 10
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  form: {
    width: '100%', 
  },
  label: {
    paddingVertical: 10,
    fontSize: 16
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    fontSize: 16,
    marginBottom: 6, 
  },
  descriptionInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 24,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'orange', 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginTop: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  uploadImageContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  uploadImageTitle: {
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16
  },
  uploadImage: {
    width: 75, 
    padding: 12, 
    borderRadius: 6, 
    borderWidth: 1, 
    borderColor: 'grey' 
  }
});
 
export default PostItem;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

