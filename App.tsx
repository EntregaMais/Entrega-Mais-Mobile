import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Button, color } from '@rneui/base';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

const Separator = () => (
  <View style={styles.separator} />
);

const Stack = createStackNavigator()

function HomeScreen({navigation}: any) {
  const [isChecked, setChecked] = useState(false);
  
  return(
    <SafeAreaView style={styles.container}>
      <LinearGradient
          colors={['rgba(31, 125, 188, 1)', 'transparent']}
          style={styles.background}
       />
      <StatusBar style="auto" />

      <KeyboardAvoidingView>
        <View>
          <Image 
            resizeMode={'contain'}
            style={styles.image}
            source={require('./assets/logo_new.png')}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={'white'}
            autoCorrect={false}
            onChangeText={()=> {}}
          />
          <TextInput
            style={styles.input}
            placeholder='Senha'
            placeholderTextColor={'white'}
            autoCorrect={false}
            onChangeText={()=> {}}
          />
          <View style={{ flexDirection: "row" }}>
            <Checkbox 
            style={styles.checkbox} 
            value={isChecked} 
            onValueChange={setChecked}
            color={isChecked ? '#00BFFF' : undefined} 
            />
            <Text style={styles.textEsqueceu}>Lembrar senha</Text>
            <TouchableOpacity style={styles.btnEsqueceu}>
              <Text style={styles.textEsqueceu}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnEntrar}>
            <Text style={styles.textEntrar}>Entrar</Text>
          </TouchableOpacity>
        </View>        
        <Separator />
        <View>
          <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.textCadastro}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>     
       
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
        source={require('./assets/logo_new.png')}
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
          headerShown: false
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
    height: 80,
    marginBottom: 40
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300
  },
  input: {
    color: '#FFF',
    fontSize: 15,
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    borderBottomColor: '#FFF',
    marginBottom: 15,
  },
  btnEsqueceu:{
    height: 40,
    marginBottom: 10,
    marginLeft: 90
  },
  textEsqueceu:{
    color: '#FFF',
    fontSize: 12
  },
  btnEntrar:{
    backgroundColor: '#FFF',
    width: '100%',
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEntrar: {
    color: '#00BFFF',
  },
  btnCadastro: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: "center",
  },
  textCadastro: {
    color: '#FFF'
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#FFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  checkbox: {
    borderColor: '#00BFFF',
    backgroundColor: '#FFF',
    marginRight: 5,
    width: 16,
    height: 16,
  },
});
