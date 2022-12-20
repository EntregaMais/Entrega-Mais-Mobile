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
	const [trajeto, setTrajeto] = useState('');
	const [references, setReferences] = useState('');

	const salvarCidade = () => {

		const body = {
			idapi: idapi,
			nmcidade: nmcidade,
			idtrajeto: idtrajeto,
			trajeto: trajeto,
			references: references
		}

		axios.post('http://192.168.0.102:3000/cidades', body)
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
						<Input
							value={idtrajeto}
							placeholder="Codigo da Transportadora"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setIdTrajeto(text)}}
						/>
						<Input
							value={trajeto}
							placeholder="Transportadora"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setTrajeto(text)}}
						/>
						<Input
							value={references}
							placeholder="References"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setReferences(text)}}
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

