import { Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Ionicons as Icon} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Login from './src/screens/Login';
import Logo from './src/componentes/Logo';
import TabNavigator from './src/navigation/RoutesBottomNavigator';

import {AdicionarPacoteStep1,
			AdicionarPacoteStep2,
				AdicionarPacoteStep3} from './src/screens/AdicionarPacotes/AdicionarPacoteExport';

import {CadastroTransportadorStep1,
			CadastroTransportadorStep2} from './src/screens/CadastroTransportador/CadastroTransportadorExport';

const Stack = createStackNavigator();


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
					}}
					/>

				<Stack.Screen name='CadastroTransportadorStep1' component={CadastroTransportadorStep1}
					options={{
						headerTransparent: true,
						headerTitleAlign: 'center',
						headerTintColor: '#ffffff',
						headerTitle: (props) => <Logo {...props} />
					}}
					/>
				<Stack.Screen name='CadastroTransportadorStep2' component={CadastroTransportadorStep2}
					options={{
						headerTransparent: true,
						headerTitleAlign: 'center',
						headerTintColor: '#ffffff',
						headerTitle: (props) => <Logo {...props} />
					}}
					/>
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
						headerTitle: (props) => <Logo {...props} />
					}}
					/>
				<Stack.Screen name="AdicionarPacoteStep1" component={AdicionarPacoteStep1}
					options={{
						headerTransparent: true,
						headerTitleAlign: 'center',
						headerTintColor: '#ffffff',
						headerTitle: (props) => <Logo {...props} />
					}}
					/>
				<Stack.Screen name="AdicionarPacoteStep2" component={AdicionarPacoteStep2}
					options={{
						headerTransparent: true,
						headerTitleAlign: 'center',
						headerTintColor: '#ffffff',
						headerTitle: (props) => <Logo {...props} />
					}}
					/>
				<Stack.Screen name="AdicionarPacoteStep3" component={AdicionarPacoteStep3}
					options={{
						headerTransparent: true,
						headerTitleAlign: 'center',
						headerTintColor: '#ffffff',
						headerTitle: (props) => <Logo {...props} />
					}}
					/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}


