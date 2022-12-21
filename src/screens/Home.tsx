import React, { useState , useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, TextInput, Pressable} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 as Icon} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from "@rneui/base";
import LinearGradientBackground from "../componentes/LinearGradient";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


const Tab = createBottomTabNavigator();

export default function Home({route}: any){

	const [idTransportadora, setIdTransportadora] = useState('');
	const [email, setEmail] = useState('');

	const getData = async (email:string) => {
		try {
		  	const value = await AsyncStorage.getItem(email)
			if(value !== null) {
				setEmail(value);
				console.log(value);
		  	}
		} catch(e) {
		  // error reading value
		}
	}

	const storeData = async (id:string) => {
		try {
		  await AsyncStorage.setItem('idTransportadora', id)
		} catch (e) {
		  // saving error
		}
	}

	useEffect(() => {
        //getIdTransportadora("idTransportadora");
		getData("email");

		axios.get(`http://entregamais.brazilsouth.cloudapp.azure.com:7730/api/transportadora/transportadoraPorEmail/${email}`
        ).then(res => {
            console.log(res.data.id);
			setIdTransportadora(res.data.id);
			storeData(JSON.stringify(res.data.id));
        }).catch((error) => {
			console.log(error); 
		})

    }, [email,idTransportadora]);

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradientBackground/>
			{/* <Text style={{fontSize: 15, color: '#FFF', marginBottom: 10}}>Bem Vindo {route.params.paramKey}</Text> */}
			<View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly'}}>

				<TouchableOpacity style={styles.bnt}>
					<Text style={styles.textStyleBtn}>Envios</Text>
					<Icon name="dolly" size={20} color="#FFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.bnt}>
					<Text style={styles.textStyleBtn}>Entregas</Text>
					<Icon name="people-carry" size={20} color="#FFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.bnt}>
					<Text style={styles.textStyleBtn}>Relatorios</Text>
					<Icon name="chart-bar" size={20} color="#FFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.bnt}>
					<Text style={styles.textStyleBtn}>Histórico</Text>
					<Icon name="tasks" size={20} color="#FFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.bnt}>
					<Text style={styles.textStyleBtn}>Financeiro</Text>
					<Icon name="hand-holding-usd" size={20} color="#FFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.bnt}>
					<Text style={styles.textStyleBtn}>Cidades</Text>
					<Icon name="map-marked-alt" size={20} color="#FFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.bnt}>
					<Text style={styles.textStyleBtn}>Rotas</Text>
					<Icon name="route" size={20} color="#FFF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.bnt}>
					<Text style={styles.textStyleBtn}>Usuários</Text>
					<Icon name="users" size={20} color="#FFF" />
				</TouchableOpacity>
			</View >
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(86, 203, 242, 1)'
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
	  height: 300
	},
	textStyleBtn: {
		fontFamily: 'Insanibu',
		fontSize: 23,
		color: '#FFF',
		textShadowColor: '#8a8a8a', 
		textShadowOffset: { width: 0, height: 1 },
		textShadowRadius: 1, 
	},
	bnt: {
		width: 150,
		height: 100,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		borderColor: '#FFF',
		backgroundColor: 'transparent',
		borderRadius: 10,
		borderWidth: 1,
		marginTop: 10,
		//elevation: 1,
		shadowColor: '#52006A',
	},
});