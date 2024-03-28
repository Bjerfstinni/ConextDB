import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Navigation */}
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>USTP CONeXT</Text>
        {/* Add navigation buttons */}
      </View>

      {/* Get Connected */}
      <View style={styles.getConnected}>
        <Text style={styles.heading}>Get Connected to The Next Generation</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus iusto commodi corrupti praesentium repellat eius, atque, quod nihil tempore inventore tempora error, assumenda numquam consectetur. Optio quae voluptates sunt!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connect With Us!</Text>
        </TouchableOpacity>
        <Image source={require('./assets/img1.png')} style={styles.image} />
      </View>

      {/* Subscription */}
      <View style={styles.subscription}>
        <Text style={styles.subscriptionHeading}>Sign Up for Constant Notification</Text>
        {/* Implement subscription form */}
      </View>

      {/* Cards */}
      <View style={styles.cards}>
        {/* Implement card components */}
      </View>

      {/* Images */}
      <View style={styles.images}>
        {/* Implement image components */}
      </View>

      {/* Accordion */}
      <View style={styles.accordion}>
        {/* Implement accordion components */}
      </View>

      {/* Administrators */}
      <View style={styles.administrators}>
        {/* Implement administrators component */}
      </View>

      {/* Modal */}
      {/* Implement modal component */}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright © 2023</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#044556',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navbarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  getConnected: {
    backgroundColor: '#044556',
    padding: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    color: '#aeb2b3',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#044556',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
  subscription: {
    backgroundColor: '#000',
    padding: 20,
  },
  subscriptionHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Define styles for other sections as needed
  footer: {
    backgroundColor: '#044556',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});
