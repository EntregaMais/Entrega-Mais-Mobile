import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['rgba(31, 125, 188, 1)', 'transparent']}
          style={styles.background}
       />
      <StatusBar style="auto" />
      <Image 
        resizeMode={'contain'}
        style={styles.image}
        source={require('./assets/logo.png')}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //background: 'linear-gradient(180deg, #1F7DBC 0%, #56CBF2 100%)',
    //'rgba(86, 203, 242, 1)', 'rgba(86, 203, 242, 1)', 'transparent'
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(86, 203, 242, 1)'
  },
  image: {
    width: 300,
    height: 80
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300
  }

});
