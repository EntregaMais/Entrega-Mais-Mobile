import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import Button from '../../componentes/Button';
import Container from '../../componentes/Container';
import { salvarUsuario } from '../../services/salvarUsuarioService';
import { Column, HeaderText, HidePassword, Input, Row, Separator } from '../../styled';

import axios from "axios";



export default function CadastroUsuarioStep1({ route, navigation }: any) {

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [ConfirmSenha, setSenhaConfirm] = useState('');

	const [hidePassword, setHidePassword] = useState(true);
	const [hidePassword2, setHidePassword2] = useState(true);


	const salvarUsuario = async (email:string, password:string) => {
		let headersList = {
			"Content-Type": "application/json" 
		   }
		   
		   let bodyContent = JSON.stringify({
			   "email": email,
			   "password": password
		   });
		   
		   let reqOptions = {
			 url: "http://localhost:8080/api/usuario/salvar",
			 method: "POST",
			 headers: headersList,
			 data: bodyContent,
		   }
		   
		   let response = await axios.request(reqOptions);
		   console.log(response.data);
	}

	const testSalvarUsuario = async (email:string, password:string) => {

		const bodyParameters = {
			email: email,
			password: password
		};
		
		axios.post( 
		  'http://localhost:8080/api/usuario/salvar',
		  bodyParameters
		).then(response => console.log(response.data));
	}

	const salvarUsuario2 = async (email:string, password:string) => {
		var data = JSON.stringify({
			"email": email,
			"password": password
		});
		
		var config = {
			method: 'post',
			url: 'http://localhost:8080/api/usuario/salvar',
			headers: { 
				'Content-Type': 'application/json'
			},
			data : data
		};
	
		axios.request(config).then(function (response: { data: any; }) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error: any) {
			console.log(error.message);
		});
	}

	return (
		<Container>
			<KeyboardAvoidingView>
				<Row>
					<Column alignItensCenter>
						<Row justifyContentCenter>
							<Icon
								style={styles.iconStep}
								name={'checkmark-circle'}
								size={15}
								color="#FFFF00"
							/>
							<Separator />
							<Icon
								style={styles.iconStep}
								name={'caret-down-circle'}
								size={15}
								color="#FFF"
							/>
						</Row>

						<HeaderText>CADASTRO USUARIO</HeaderText>

						<Input
							placeholder="Email"
							placeholderTextColor={'white'}
							autoCorrect={false}
							value={email}
							onChangeText={(text: any) => {setEmail(text);}}
							autoCapitalize="none"
						/>
						<Row nowrap>
							<Input
								placeholder="Senha"
								secureTextEntry={hidePassword}
								placeholderTextColor={'white'}
								autoCorrect={false}
								value={senha}
								onChangeText={(text: any) => {setSenha(text);}}
								autoCapitalize="none"
							/>
							<HidePassword
								onPress={() => setHidePassword(!hidePassword)}
							>
								{hidePassword ? (
									<Icon name={'eye'} size={20} color="#FFF" />
								) : (
									<Icon
										name={'eye-off'}
										size={20}
										color="#FFF"
									/>
								)}
							</HidePassword>
						</Row>
						<Row nowrap>
							<Input
								placeholder="Confirmar Senha"
								secureTextEntry={hidePassword2}
								placeholderTextColor={'white'}
								autoCorrect={false}
								value={ConfirmSenha}
								onChangeText={(text: any) => {setSenhaConfirm(text)}}
								autoCapitalize="none"
							/>
							<HidePassword
								onPress={() => setHidePassword(!hidePassword2)}
							>
								{hidePassword2 ? (
									<Icon name={'eye'} size={20} color="#FFF" />
								) : (
									<Icon
										name={'eye-off'}
										size={20}
										color="#FFF"
									/>
								)}
							</HidePassword>
						</Row>

						<Button
							isPrimary
							buttonSize={'large'}
							labelSize={'medium'}
							onPress={() => {testSalvarUsuario(email,senha);}}
						>
							Cadastrar Usuário
						</Button>
					</Column>
				</Row>
			</KeyboardAvoidingView>
		</Container>
	);
}

const styles = StyleSheet.create({
	iconStep: {
		marginTop: 10,
		marginLeft: 1,
		marginRight: 1,
	},
});
