import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
import { MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Row, Column, Input, Text, HidePassword, Separator, CheckboxExpo, Label } from '../styled'
import Button from '../componentes/Button'
import Container from '../componentes/Container';
import Logo from '../componentes/Logo';


export default function Login({navigation}: any) {

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [isChecked, setChecked] = useState(false);

	return (
		<Container>
			<KeyboardAvoidingView>
				<Row>
					<Column
						alignItensCenter
						>
						<Logo size={'large'}/>
						<Input
							placeholder='Email'
							placeholderTextColor={'white'}
							autoCorrect={false}
							value={email}
							onChangeText={ (text: any) => setEmail(text)}
							autoCapitalize="none"
							/>
						<Row 
							nowrap
							>
							<Input
								placeholder='Senha'
								secureTextEntry={hidePassword}
								placeholderTextColor={'white'}
								autoCorrect={false}
								value={senha}
								onChangeText={ (text: any) => setSenha(text)}
								autoCapitalize='none'
								/>
							<HidePassword 
								onPress={ () => setHidePassword(!hidePassword)}>
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
								onPress={() => {setChecked(!isChecked); console.log(isChecked)}}
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
							onPress={() => navigation.navigate('Home')}
						>
							Entrar
						</Button>

						<Separator/>

						<Button
							buttonSize={'large'}
							labelSize={'medium'} 
							onPress={() => navigation.navigate('CadastroTransportadorStep1')}
						>
							Cadastro
						</Button>

					</Column>
				</Row>
			</KeyboardAvoidingView>
		</Container>
	);
}

const styles = StyleSheet.create({
	image: {
	  width: 300,
	  height: 80,
	  marginBottom: 40
	},
	btnEsqueceu:{
	  height: 40,
	  marginBottom: 2,
	  marginLeft: 90
	},
	btnEntrar:{
	  backgroundColor: '#FFF',
	  width: '100%',
	  height: 40,
	  borderRadius: 50,
	  alignItems: 'center',
	  justifyContent: 'center',
	  elevation: 4,
	  shadowColor: '#52006A',
	  //marginBottom: 12
	},
	textSeparator: {
	  fontSize: 12,
	  color: '#FFF',
	  marginTop: 10,
	  marginLeft: 9,
	  //marginRight: 1,
  }
});