import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import { ThemeContext } from '../component/theme';


export default function Settings({ navigation }) {
    const { isEnabled, backgroundColor, color, toggleSwitch } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor} ]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.settingsText, {color}]}>Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={{ color }}>Language</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={{ color }}>My profile</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={{ color }}>Contact Us</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={{ color }}>Change Password</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={{ color }}>Privacy Policy</Text>
          <Image source={require('../assets/images/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={[styles.boldText, {color}]}>Theme</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerItems1}>
          <Image source={require('../assets/images/home.png')} />
          <TouchableHighlight
            style={styles.clickableText}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={[styles.text, {color}]}>Home</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.footerItems1}>
          <Image source={require('../assets/images/myCards.png')} />
          <Text style={{ color }}>My Cards</Text>
        </View>
        <View style={styles.footerItems1}>
          <Image source={require('../assets/images/statictics.png')} />
          <Text style={{ color }}>Statistics</Text>
        </View>
        <View style={styles.footerItems1}>
          <Image source={require('../assets/images/settings.png')} />
          <TouchableHighlight
            style={styles.clickableText}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={[styles.text, {color}]}>Settings</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  settingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
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
    marginBottom: 20,
  },
  footerItems1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
