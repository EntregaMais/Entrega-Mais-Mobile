import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Alert } from 'react-native';

import Button from '../../componentes/Button';
import Container from '../../componentes/Container';
import { Column, HeaderText, Input, Row, Separator, Text } from '../../styled';
import axios from "axios";

export default function CadastroDespachanteStep1({ navigation }: any) {
	const [nmdespachante, setNmDespachante] = useState('');
	const [idtransportadora, setIdTransportadora] = useState('');

	const salvarDespachante = () => {

		const body = {
			nmdespachante: nmdespachante,
			idtransportadora: idtransportadora,
		}

		axios.post('http://entregamais.brazilsouth.cloudapp.azure.com:3000/despachantes', body)
			.then(res => {
				console.log(body);
				const titulo = (res.data.status) ? "Erro" : "Sucesso";
				Alert.alert(titulo, "Cadastro realizado com sucesso!", [ {
					text: "OK", onPress: () => {navigation.navigate('MinhasMercadorias',{})}
				}]);
				console.log(res.data);
			})
			.catch((error) => {
				Alert.alert("Erro", "Erro ao tentar cadastrar despachante");
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

						<HeaderText>Despachante</HeaderText>

						<Input
							value={nmdespachante}
							placeholder="Nome do Despachante"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setNmDespachante(text)}}
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
								salvarDespachante();
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

