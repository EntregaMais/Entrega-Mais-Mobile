import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';

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

	const checkTextInput = () => {
		if (!email.trim()) {
		  alert('Por favor insira o email');
		  return false;
		}
		if (!senha.trim()) {
		  alert('Por favor insira uma senha');
		  return false;
		}
		//alert('Success');
		return true
	  };

	const SalvarUsuario = async (email:string, password:string) => {

		const bodyParameters = {
			email: email,
			password: password
		};
		axios.get('http://entregamais.brazilsouth.cloudapp.azure.com:7720/api/usuario/ok', {timeout: 10000})
		.then(response => {
			if(response.status == 200){
				axios.post('http://192.168.1.6:7720/api/usuario/salvar', bodyParameters)
				.then(res => {
					const titulo = (res.data.status) ? "Erro" : "Sucesso";
					Alert.alert(titulo, "Usuário\n" + email + "\nCadastrado com sucesso!", [ {
						text: "OK", onPress: () => {navigation.navigate('Login',{
							email: email, senha: senha
						})}
					}]);
					console.log(res.data);
				})
				.catch((error) => {
					Alert.alert("Erro", "Erro ao tentar cadastrar usuário"); 
				})
			}
		}).catch((error) => {
			console.log('eitaa');
			Alert.alert("Erro", "Nossos servidores estão fora do ar. Usuario:Step1");
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
						<Row wrap={false}>
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
						<Row wrap={false}>
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
							onPress={() => {checkTextInput() ?
								SalvarUsuario(email,senha) : false;}}
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
