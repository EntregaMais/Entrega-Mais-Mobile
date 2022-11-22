import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import AdicionarPacoteStep1 from "../screens/AdicionarPacotes/AdicionarPacoteStep1";
import Feather from 'react-native-vector-icons/Feather';
import LogoTitle from "../componentes/LogoTitle";
import { TouchableOpacity } from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons';
import PopupMenu from "../componentes/PopupMenu";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();

export default function TabNavigator({navigation}: any) {

	const [email, setEmail] = useState('');
	
	const getData = async (email:string) => {
		try {
		  	const value = await AsyncStorage.getItem(email)
			if(value !== null) {
				console.log(value);
				navigation.navigate('Perfil',{email: email})
		  	}
		} catch(e) {
		  // error reading value
		}
	}  

	return (
		<Tab.Navigator 
			screenOptions={{
				headerTransparent: true,
				headerTitleAlign: 'center',
				headerTintColor: '#ffffff',
				headerLeft: ()=> (
					<PopupMenu children={undefined} />
				),
				headerRight: ()=> (
					<TouchableOpacity style={{marginRight: 10}} onPress={() => {getData('email')}}>
						<Icon name="person-circle-outline" size={35} color="#FFF"></Icon>
					</TouchableOpacity>
				),
				tabBarInactiveTintColor: '#FFF',
				tabBarStyle: {
					//borderTopWidth: 0,
					//backgroundColor: '#52C5EE',
					elevation: 0,
					backgroundColor: 'transparent',
					position: 'absolute',
					paddingBottom: 5,
				},
				headerTitle: (props) => <LogoTitle {...props} />
			}}
		>
			<Tab.Screen 
				name="Inicio"
				component={Home}
				options={{
					headerShown: true,
					tabBarIcon: ({color, size}) => (<Feather name="home" color={color} size={size} />)
				}}
			/>
			<Tab.Screen 
				name="Minhas Mercadorias"
				component={AdicionarPacoteStep1} options={{
				tabBarIcon: ({color, size}) => (<Feather name="package" color={color} size={size} />),
				}}
			/>
		</Tab.Navigator>
	);
}
