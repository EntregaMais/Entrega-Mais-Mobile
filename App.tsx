import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Button, color } from '@rneui/base';
import React from 'react';

const Separator = () => (
  <View style={styles.separator} />
);

const Stack = createStackNavigator()

function HomeScreen({navigation}: any) {
  return(
    <SafeAreaView style={styles.container}>
      <LinearGradient
          colors={['rgba(31, 125, 188, 1)', 'transparent']}
          style={styles.background}
       />
      <StatusBar style="auto" />
      <View>
        <Image 
          resizeMode={'contain'}
          style={styles.image}
          source={require('./assets/logo.png')}
        />
      </View>
      <Separator />
      <View>
        <Button
          style={styles.Button}
          title="Cadastro"
          onPress={() => navigation.navigate('Cadastro')}
        />  
      </View>
    </SafeAreaView>
  );
}

function Form({navigation}: any) {
  return(
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


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'white'}
        }} />
        <Stack.Screen name='Cadastro' component={Form}
        options={{
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'white'}
        }} />
      </Stack.Navigator>
    </NavigationContainer>
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
  },
  Button: {
    // flexDirection: "row",
    // justifyContent: "space-between"
  },
  separator: {
    marginVertical: 50,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});
