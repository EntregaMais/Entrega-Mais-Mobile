import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Alert } from 'react-native';

import Button from '../../componentes/Button';
import Container from '../../componentes/Container';
import { Column, HeaderText, Input, Row, Separator, Text } from '../../styled';
import axios from "axios";

export default function CadastroVeiculoStep1({ navigation, route }: any) {
	const [placa, setPlaca] = useState('');
	const [idrota, setIdRota] = useState('');
	const [idtransportadora, setIdTransportadora] = useState('');

	useEffect(() => {
		console.log(route.params?.email)
		axios.get('http://entregamais.brazilsouth.cloudapp.azure.com:7730/api/transportadora/ok', {timeout: 10000})
		.then(response => {
			if(response.status == 200){
				axios.get(`http://entregamais.brazilsouth.cloudapp.azure.com:7730/api/transportadora/transportadoraPorEmail/${route.params?.email}`
				).then(res => {
					console.log(res.data.id);
					setIdTransportadora(res.data.id);
				}).catch((error) => {
					console.log(error); 
				})
			}
		}).catch((error) => {
			console.log('eitaa');
			Alert.alert("Erro", "Nossos servidores estão fora do ar. Transportadora:Veiculo:PorEmail");
		});
    }, []);

	const salvarVeiculo = () => {

		const body = {
			placa: placa,
			idrota: idrota,
			idtransportadora: idtransportadora,
		}
		axios.get('http://ruby.brazilsouth.cloudapp.azure.com:3000/veiculo/ok', {timeout: 10000})
			.then(response => {
				if(response.status == 200){
				axios.post('http://ruby.brazilsouth.cloudapp.azure.com:3000/veiculos', body)
					.then(res => {
						console.log(body);
						const titulo = (res.data.status) ? "Erro" : "Sucesso";
						Alert.alert(titulo, "Cadastro realizado com sucesso!", [ {
							text: "OK", onPress: () => {navigation.navigate('MinhasMercadorias',{})}
						}]);
						console.log(res.data);
					})
					.catch((error) => {
						Alert.alert("Erro", "Erro ao tentar cadastrar veículo");
						console.log(error);
					});
				}
			}).catch((error) => {
				console.log('eitaa');
				Alert.alert("Erro", "Nossos servidores estão fora do ar. Veiculo:Step1");
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

						<HeaderText>Veiculo</HeaderText>

						<Input
							value={placa}
							placeholder="Nome do Veiculo"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setPlaca(text)}}
						/>
						<Input
							value={idrota}
							placeholder="Placa do Veiculo"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setIdRota(text)}}
						/>

						<Button
							isPrimary
							buttonSize={'large'}
							labelSize={'medium'}
							onPress={() => { 
								salvarVeiculo();
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

