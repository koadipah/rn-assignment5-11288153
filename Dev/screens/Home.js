import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList, TouchableHighlight } from 'react-native';
import { ThemeContext } from '../component/theme';


const transactions = [
    { id: '1', image: require('../assets/images/apple.png'), title: 'Apple', subtitle: 'Entertainment', amount: '-$200' },
    { id: '2', image: require('../assets/images/spotify.png'), title: 'Spotify', subtitle: 'Music', amount: '-$200' },
    { id: '3', image: require('../assets/images/moneyTransfer.png'), title: 'Money Transfer', subtitle: 'Transactions', amount: '$400' },
    { id: '4', image: require('../assets/images/grocery.png'), title: 'Grocery', subtitle: 'Shopping', amount: '-$200' },
];


export default function Home({ navigation}) {

    const { backgroundColor, color } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/images/profile.png')} style={styles.image} />
          <View>
            <Text style = {{color}}>Welcome back, </Text>
            <Text style={[styles.profileBold, {color}]}>John Doe</Text>
          </View>
        </View>
        <Image source={require('../assets/images/search(1).png')} style={styles.image} />
      </View>
      <View>
        <Image source={require('../assets/images/Card.png')} style={styles.cardImage} />
      </View>
      <View style={styles.scrollContainer}>
        <View style={styles.footerItems}>
          <Image source={require('../assets/images/send.png')} />
          <Text  style = {{color}}>Sent</Text>
        </View>
        <View style={styles.footerItems}>
          <Image source={require('../assets/images/recieve.png')} />
          <Text  style = {{color}}>Receive</Text>
        </View>
        <View style={styles.footerItems}>
          <Image source={require('../assets/images/loan(1).png')} />
          <Text  style = {{color}}>Loan</Text>
        </View>
        <View style={styles.footerItems}>
          <Image source={require('../assets/images/topUp.png')} />
          <Text  style = {{color}}>Top Up</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text  style = {{color}}>Transactions</Text>
        <Text style={[styles.blueText, {color}]}>See All</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.flatContainer}>
            <View style={styles.imageAndText}>
              <Image source={item.image} style={styles.transactionImage} />
              <View>
                <Text style={[styles.text, {color}]}>{item.title}</Text>
                <Text>{item.subtitle}</Text>
              </View>
            </View>
            <View>
              <Text style={item.amount.startsWith('-') ? styles.redText : styles.blueText}>
                {item.amount}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.footerContainer}>
      <View style={styles.footerItems1}>
        <Image source={require('../assets/images/home.png')} />
        <TouchableHighlight
        style={styles.clickableText}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.text1}>Home</Text>
      </TouchableHighlight>
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
        <TouchableHighlight
        style={styles.clickableText}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.text1}>Settings</Text>
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
      headerContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      profileContainer: {
        flexDirection: 'row',
      },
      image: {
        width: 55,
        height: 55,
        marginRight: 20,
        borderRadius: 10,
      },
      profileBold: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
      },
      cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.5,
        resizeMode: 'cover',
        marginTop: 30,
        borderRadius: 15,
      },
      footerItems: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      },
      scrollContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
      },
      blueText: {
        color: 'blue',
      },
      redText: {
        color: 'red',
      },
      flatContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
      },
      imageAndText: {
        flexDirection: 'row',
      },
      transactionImage: {
        width: 45,
        height: 45,
        marginRight: 20,
        borderRadius: 10,
      },
      text: {
        fontWeight: 'bold',
        marginBottom: 10,
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
    }
});
    