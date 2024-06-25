import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView  } from 'react-native';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.settingsText}>Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text>Language</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text>My profile</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text>Contact Us</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text>Change Password</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text>Privacy Policy</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.switchContainer}>
          <Text style={styles.boldText}>Theme</Text> 
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
      <View style={styles.footerItems1}>
        <Image source={require('../assets/images/home.png')} />
        <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.footerItems1}>
        <Image source={require('../assets/images/myCards.png')} />
        <Text>My Cards</Text>
      </View>
      <View style={styles.footerItems1}>
        <Image source={require('../assets/images/statictics.png')} />
        <Text>Statistics</Text>
      </View>
      <View style={styles.footerItems1}>
        <Image source={require('../assets/images/settings.png')} />
        <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  settingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginTop: 40 
  },
    boldText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 80,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        height: 20,
        width: 20,
        borderRadius: 50,
    },
    line: {
        height: 1,
        backgroundColor: '#000',
        marginVertical: 10,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    footerItems1: {
        flexDirection: 'column',
        alignItems: 'center',
    },

});