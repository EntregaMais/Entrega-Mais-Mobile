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


	const getData = async (email:string) => {
		try {
		  	const value = await AsyncStorage.getItem(email)
			if(value !== null) {
				console.log(value);
				setEmail(value);
				navigation.navigate('CadastroDespachanteStep1',{
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

	// useEffect(() => {
    //     getData("email");
	// 	axios.get(`http://192.168.0.102:7730/api/transportadora/transportadoraPorEmail/${email}`
    //     ).then(res => {
    //         console.log(res.data.id);
	// 		setIdTransportadora(res.data.id);
	// 		storeData(JSON.stringify(res.data.id));
    //     }).catch((error) => {
	// 		console.log(error); 
	// 	})
    // }, [email]);

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
					onPress={() => {getData('email')}}
				>
					Novo pedido
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('email')}}
				>
					Novo Despachante
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('email')}}
				>
					Novo Trajeto
			</Button>
			<Separator/>
			<Button
					isPrimary
					buttonSize={'large'}
					labelSize={'medium'}
					onPress={() => {getData('email')}}
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