import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
const PlaceholderImage = require("./assets/images/1.png");

export default function App() {
  return (
    <View style={styles.container}>
 <View style={styles.imageContainer}>
 <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
      <Button theme="primary" label="Choose a photo" />
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
      <Text style={styles.title}> 20 caracteres</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
