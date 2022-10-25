import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';

import Button from '../componentes/Button';
import Container from '../componentes/Container';
import Logo from '../componentes/Logo';
import { CheckboxExpo, Column, HidePassword, Input, Label, Row, Separator } from '../styled';

import axios from "axios";


export default function Login({route, navigation}: any) {

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [isChecked, setChecked] = useState(false);

	const checkTextInput = () => {
		if (!email.trim()) {
		  alert('Por favor insira o email');
		  return false;
		}
		if (!senha.trim()) {
		  alert('Por favor insira a senha');
		  return false;
		}
		//alert('Success');
		return true
	  };

	const login = async (email:string, password:string) => {

		const bodyParameters = {
			email: email,
			password: password
		};		
		
		axios.post( 
		  'http://192.168.1.5:8080/login',
		  bodyParameters
		).then(response => {
			if(response.status == 200){
				navigation.navigate('Home');
			}
			const token = JSON.stringify(response.data).split(" ")
			console.log(token[1]);
		})
		.catch((error) => {
			Alert.alert("Erro", "Email ou senha incorretos.");
		});
	};

	return (
		<Container>
			<KeyboardAvoidingView>
				<Row>
					<Column alignItensCenter>
						<Logo size={'large'}/>
						<Input
							placeholder='Email'
							placeholderTextColor={'white'}
							autoCorrect={false}
							value={email}
							onChangeText={(text: any) => setEmail(text)}
							autoCapitalize="none"
							/>
						<Row nowrap>
							<Input
								placeholder='Senha'
								secureTextEntry={hidePassword}
								placeholderTextColor={'white'}
								autoCorrect={false}
								value={senha}
								onChangeText={(text: any) => setSenha(text)}
								autoCapitalize='none'
								/>
							<HidePassword 
								onPress={() => setHidePassword(!hidePassword)}>
								{ hidePassword ?
									<Icon name={"eye"} size={20} color="#FFF" />
									:
									<Icon name={"eye-off"} size={20} color="#FFF" />
								}
							</HidePassword>
						</Row>

						<Row
							justifyContentSpaceBetween
							>
							<Button 
								buttonSize={'auto'}
								labelSize={'small'}
								onPress={() => {setChecked(!isChecked);}}
								>
								<Row>
									<CheckboxExpo
										value={isChecked}
										onValueChange={setChecked}
										color={isChecked ? '#00BFFF' : undefined}
									/>
									<Label labelSize={'small'}>Lembrar senha</Label>
								</Row>
							</Button>
							<Button
								buttonSize={'auto'}
								labelSize={'small'}
							>
								Esqueceu a senha
							</Button>
						</Row>
						
						<Button 
							buttonSize={'large'}
							labelSize={'medium'} 
							isPrimary
							onPress={() => {
								checkTextInput() ?
								login(email, senha) : false}}
						>
							Entrar
						</Button>

						<Separator/>

						<Button
							buttonSize={'large'}
							labelSize={'medium'} 
							onPress={() => {navigation.navigate('CadastroUsuarioStep1');}}
						>
							Cadastro Usuario
						</Button>

						<Button
							buttonSize={'large'}
							labelSize={'medium'} 
							onPress={() => {navigation.navigate('CadastroTransportadorStep1');}}
						>
							Cadastro Transportador
						</Button>

					</Column>
				</Row>
			</KeyboardAvoidingView>
		</Container>
	);
}
