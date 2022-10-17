import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import Button from '../componentes/Button';
import Container from '../componentes/Container';
import Logo from '../componentes/Logo';
import { CheckboxExpo, Column, HidePassword, Input, Label, Row, Separator } from '../styled';


export default function Login({navigation}: any) {

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [isChecked, setChecked] = useState(false);

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
							onPress={() => {navigation.navigate('Home');}}
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
