import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Friend!</Text>
      <StatusBar style="auto" />
      <Image 
      resizeMode={'contain'}
      style={styles.image}
      source={require('./assets/logo_leva+.png')}
      //style={{ width: 50, height: 50 }}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 586,
    height: 159
  }

});
