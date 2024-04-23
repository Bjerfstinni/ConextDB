import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import axios from 'axios';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(response.data);
      // Handle successful login
    } catch (error) {
      console.error('Login error:', error.response.data);
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', { email, password, firstName, lastName });
      console.log(response.data);
      // Handle successful signup
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'User already registered.');
    }
  };
  const toggleAuthType = () => {
    setIsLogin(!isLogin);
  };

  const headerText = isLogin ? 'Login' : 'Sign Up';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{headerText}</Text>
      {isLogin ? (
        <>
          {/* Login Section */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* Signup Section */}
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
      {/* Toggle between login and signup */}
      <TouchableOpacity onPress={toggleAuthType}>
        <Text style={styles.toggleText}>{isLogin ? 'New User? Sign Up' : 'Already Have an Account'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#044556',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  toggleText: {
    color: '#007bff', // Link color
    textAlign: 'center',
    marginTop: 10,
  },
});

export default AuthScreen;
