import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Alert } from 'react-native';

import Button from '../../componentes/Button';
import Container from '../../componentes/Container';
import { Column, HeaderText, Input, Row, Separator, Text } from '../../styled';
import axios from "axios";

export default function CadastroVeiculoStep1({ navigation }: any) {
	const [placa, setPlaca] = useState('');
	const [idrota, setIdRota] = useState('');
	const [idtransportadora, setIdTransportadora] = useState('');

	const salvarVeiculo = () => {

		const body = {
			placa: placa,
			idrota: idrota,
			idtransportadora: idtransportadora,
		}

		axios.post('http://192.168.0.102:3000/veiculos', body)
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
						<Input
							value={idtransportadora}
							placeholder="Codigo da Transportadora"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setIdTransportadora(text)}}
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

