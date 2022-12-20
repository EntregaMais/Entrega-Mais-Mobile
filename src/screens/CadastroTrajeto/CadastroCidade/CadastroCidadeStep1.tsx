import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';

import Button from '../../../componentes/Button';
import Container from '../../../componentes/Container';
import { Column, HeaderText, Input, Row, Separator, Text } from '../../../styled';
import axios from "axios";

export default function CadastroCidadeStep1({ navigation, route}: any) {

	const [idapi, setIdApi] = useState('');
	const [nmcidade, setNmCidade] = useState('');
	const [idtrajeto, setIdTrajeto] = useState('');
	const [trajetos, setTrajetos] = useState([])


	useEffect(() => {
		console.log(route.params?.idtransportadora)
		
		axios.get('http://192.168.0.102:3000/trajeto/ok', {timeout: 10000})
			.then(response => {
				if(response.status == 200){
					axios.get(`http://192.168.0.102:3000/trajetos/idtransportadora/${route.params?.idtransportadora}`
					).then(res => {
						console.log(res.data[0].id);
						setIdTrajeto(res.data[0].id);
						setTrajetos(res.data);
					}).catch((error) => {
						console.log(error); 
					})
			}
		}).catch((error) => {
			console.log('eitaa');
			Alert.alert("Erro", "Nossos servidores estão fora do ar - Trajetos:Step1");
		});
    }, []);

	const salvarCidade = () => {

		const body = {
			idapi: idapi,
			nmcidade: nmcidade,
			idtrajeto: idtrajeto
		}
		axios.get('http://192.168.0.102:3000/poli/ok', {timeout: 10000})
			.then(response => {
				if(response.status == 200){
					axios.post('http://192.168.0.102:3000/polis', body) 
						.then(res => {
							console.log(body);
							const titulo = (res.data.status) ? "Erro" : "Sucesso";
							Alert.alert(titulo, "Cadastro realizado com sucesso!", [ {
								text: "OK", onPress: () => {navigation.navigate('MinhasMercadorias',{
								} )}
							}]);
							console.log(res.data);
						})
						.catch((error) => {
							Alert.alert("Erro", "Erro ao tentar cadastrar cidade");
							console.log(error);
						});
					}
				}).catch((error) => {
					console.log('eitaa');
					Alert.alert("Erro", "Nossos servidores estão fora do ar - Polis:Step1");
				});
	}
	
	return (
		<Container>
			<KeyboardAvoidingView>
				<Row>
					<Column alignItensCenter>
						<Row justifyContentCenter>
							<Icon
								name={'caret-down-circle'}
								size={15}
								color="#FFF"
							/>
							<Separator />
							<Icon
								name={'radio-button-off-outline'}
								size={15}
								color="#dedede"
							/>
						</Row>

						<HeaderText>Cidade</HeaderText>

						<Input
							value={idapi}
							placeholder="Nome do Cidade"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setIdApi(text)}}
						/>
						<Input
							value={nmcidade}
							placeholder="Descrição do Cidade"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setNmCidade(text)}}
						/>

						<Button
							isPrimary
							buttonSize={'large'}
							labelSize={'medium'}
							onPress={() => { 
								salvarCidade();
							}}
						>
							Prosseguir
						</Button>
					</Column>
				</Row>
			</KeyboardAvoidingView>
		</Container>
	);
}

