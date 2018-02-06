import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
const image = require('./images/menu-alt-256.png');
const space = require('./images/space.png');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image style={styles.hamburger} source={image}/>
          <TextInput placeHolder={'          search'} underlineColorAndroid={'transparent'} style={styles.searchBar}/>
        </View>

        <View style={styles.BannerPictureContainer}>
          <Image style={styles.BannerPicture} source={space}/>
        </View>

        <View style={styles.smallContainer}>
          <Text style={styles.smallHeader}>Some Random Header</Text>

          <View style={styles.smallPictureContainer}>
            <Image style={styles.smallPicture} resizeMethod='auto' source={space}/>
            <Image style={styles.smallPicture} resizeMethod='auto' source={space}/>
          </View>
          <View>
        </View>
      </View>
          <Text style={styles.smallInfo}>This is a bunch of smaller text that is giving information about the two images up above.
            You might see this kind of a design on a news site.
          </Text>
          <View style={styles.smallContainer}>
          <Text style={styles.smallHeader}>Some Random Header</Text>

          <View style={styles.smallPictureContainer}>
            <Image style={styles.smallPicture} resizeMethod='auto' source={space}/>
            <Image style={styles.smallPicture} resizeMethod='auto' source={space}/>
          </View>
          <View>
        </View>
      </View>
          <Text style={styles.smallInfo}>This is a bunch of smaller text that is giving information about the two images up above.
            You might see this kind of a design on a news site.
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  smallHeader: {
    fontSize: 21,
  },
  smallInfo: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 4,
    margin: 2,
    textAlign: 'left',
  },
  smallContainer:{
    flex: -1,
    height: '25%',
    backgroundColor: 'white',
  },
  smallPictureContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  smallPicture: {
    flex: -1,
    padding: 3,
    margin: 3,
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  BannerPictureContainer: {
    height: '20%',
  },
  BannerPicture: {
    height: '100%',
    width: '100%',
    backgroundColor: 'grey',
  },
  bannerContainer: {
    flex: 0,
    marginTop: 30,
    height: 30,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  searchBar: {
    backgroundColor: 'white',
    height: '100%',
    color: 'black',
    width: '90%',
    borderRadius: 50,
    paddingLeft: 15,
  },
  hamburger: {
    height: 30,
    width: 30,
  }
});
