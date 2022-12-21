import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from "../../componentes/Container";
import { StyleSheet, View, Alert, KeyboardAvoidingView, TouchableOpacity, FlatList, ListRenderItem } from "react-native";
import { Text, Input, Row, Column, Separator } from '../../styled';
import { Ionicons as Icon } from '@expo/vector-icons';
import Button from '../../componentes/Button';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function Listagem({navigation, route}: any) {
	const [porta, setPorta] = useState('');
	const [contexto, setContext] = useState('');

	const [idtransportadora, setIdTransportadora] = useState('');

	const getTransp = async () => {
		try {
		  	const value = await AsyncStorage.getItem('idTransportadora')
			if(value !== null) {
				setIdTransportadora(value);
				console.log(value);
		  	}
		} catch(e) {
		  // error reading value
		}
	}

	useEffect(() => {
		getTransp();

    }, [idtransportadora]);

	const getData = async (navigate_to:string, port:string, context:string, id?:string) => {
		try {
			setPorta(port)
			setContext(context);
			navigation.navigate(navigate_to,{
				port: port,
				context: context,
				id: id
			});
		} catch(e) {
		  // error reading value
		}
	}

	return(
		<Container>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('ListagemList','7740','/api/pedido/pedidosPorIdTransportadora/', idtransportadora)}}
				>
					Listagem Pedido
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('ListagemList','3000','/despachantes')}}
				>
					Listagem Despachante
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('ListagemList','3000','/trajetos')}}
				>
					Listagem Trajeto
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('ListagemList','3000','/veiculos')}}
				>
					Listagem Veiculo
			</Button>
        </Container>
    );
};

const styles = StyleSheet.create({
	item: {
	  width: 300,
	  padding: 20,
	  marginVertical: 8,
	  borderColor: '#FFF',
	  backgroundColor: 'transparent',
	  borderRadius: 10,
	  borderWidth: 1,

	},
	title: {
	  fontSize: 20,
	},
	text: {
		fontSize: 15,
	}
});