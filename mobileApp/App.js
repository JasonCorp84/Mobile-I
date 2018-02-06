import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


const image1 = require('./designs/space.png');
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>HEADER</Text>
        </View>
        <View style={styles.imageContainer} resizeMode={'contain'}>
          <Image style={styles.image} source={image1} resizeMode={'contain'} />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.buttons} 
            title="Like"
            theme='dark'
            onPress={null}
            color="skyblue"
            accessibilityLabel="Like button"
           />
           <Button style={styles.buttons}
            title="Share"
            onPress={null}
            color="white"
            accessibilityLabel="Share button"
           />
           <Button style={styles.buttons}
            title="Comment"
            onPress={null}
            color="white"
            Text="black"
            accessibilityLabel="Comment button"
           />
        </View>

        <View style={styles.commentContainer}>
          <View style={styles.comments}>
            <Text>Some user: a comment on the picture</Text>
          </View >
          <View style={styles.comments}>
            <Text>Another user: A comment on the picture</Text>
          </View>
          <View style={styles.comments}>
            <Text>And Another User: A comment on the picture</Text>
          </View >
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comments: {
    borderColor: 'black',
    borderWidth: 1,
  },
  commentContainer: {
    justifyContent: 'flex-start',
    padding: 3,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  header: {
    flex: 0,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 0,
    backgroundColor: 'pink',
    height: '40%',
  },
  image: {
    height: '100%',
  },
  buttonText: {
    color: 'black',
  },
  buttonContainer: {
    flex: -1,
    color: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
  },
  button: {
    flex: -1,
    backgroundColor: '#f0f',
  }
});
