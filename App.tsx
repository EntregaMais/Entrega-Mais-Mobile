import { Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Ionicons as Icon} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Cadastro from './telas/CadastroTransportador';
import Login from './telas/Login';
import FinalizarCadastro from './telas/FinalizarCadastro';
import LogoTitle from './componentes/LogoTitle';
import Home from './telas/Home';
import { AdicionarPacoteStep1, 
          AdicionarPacoteStep2, 
            AdicionarPacoteStep3 } from './telas/AdicionarPacotes/AdicionarPacoteExport';
import TabNavigator from './componentes/RoutesBottomNavigator';

const Stack = createStackNavigator();

// function LogoTitle(any: any) {
//     return (
//         <Image 
//         resizeMode={'contain'}
//         style={{width: 150, height: 80, marginLeft: 8, marginTop: 2}}
//         source={require('./assets/logo_new.png')}
//       />
//     );
// }

export default function App() {
  let [fontsLoaded] = useFonts({
    'Insanibu': require('./assets/fonts/Insanibu.ttf'),
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          headerTransparent: true,
          headerShown: false
        }} />
        <Stack.Screen name='Cadastro' component={Cadastro}
        options={{
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
          headerTitle: (props) => <LogoTitle {...props} />
        }} />
        <Stack.Screen name='FinalizarCadastro' component={FinalizarCadastro}
        options={{
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
          headerTitle: (props) => <LogoTitle {...props} />
        }} />
        <Stack.Screen name='Home' component={TabNavigator}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
          headerLeft: ()=> (
            <TouchableOpacity style={{marginLeft: 10}}>
              <Icon name="menu-sharp" size={35} color="#FFF"></Icon>
            </TouchableOpacity>
          ),
          headerTitle: (props) => <LogoTitle {...props} />
        }} />
        <Stack.Screen name="AdicionarPacoteStep1" component={AdicionarPacoteStep1}
        options={{
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerTitle: (props) => <LogoTitle {...props} />
        
        }} />
        <Stack.Screen name="AdicionarPacoteStep2" component={AdicionarPacoteStep2}
        options={{
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerTitle: (props) => <LogoTitle {...props} />

        }} />
        <Stack.Screen name="AdicionarPacoteStep3" component={AdicionarPacoteStep3}
        options={{
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerTitle: (props) => <LogoTitle {...props} />

        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


