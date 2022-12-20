import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from "../../componentes/Container";
import { StyleSheet, View, Alert, KeyboardAvoidingView, TouchableOpacity, FlatList, ListRenderItem } from "react-native";
import { Text, Input, Row, Column, Separator } from '../../styled';
import { Ionicons as Icon } from '@expo/vector-icons';
import Button from '../../componentes/Button';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export function MinhasMercadorias({navigation, route}: any) {

    const [email, setEmail] = useState('');
    const [idTransportadora, setIdTransportadora] = useState('');
	const [data, setData] = useState();


	const getData = async (email:string, navigate_to:string) => {
		try {
		  	const value = await AsyncStorage.getItem(email)
			if(value !== null) {
				console.log(value);
				setEmail(value);
				navigation.navigate(navigate_to,{
					email: value,
				});
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

    return(
        <Container>
			<Row>
				<View>
					<FlatList 
						data={data}
						keyExtractor={(item) => item.id}
						renderItem={({item}) => (
							<View style={styles.item}>
								<Text style={styles.title} >{item.nmCliente}</Text>
								<Text style={styles.text} >Status: {item.status}</Text>
							</View>	
						)}
					/>
				</View>
			</Row>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('email','AdicionarPacoteStep1')}}
				>
					Novo pedido
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('email','CadastroDespachanteStep1')}}
				>
					Novo Despachante
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('email','CadastroTrajetoStep1')}}
				>
					Novo Trajeto
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('email','CadastroVeiculoStep1')}}
				>
					Novo Veiculo
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