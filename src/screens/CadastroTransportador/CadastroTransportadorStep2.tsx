import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Pressable} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import LinearGradientBackground from "../../componentes/LinearGradient";

import Container from '../../componentes/Container';
import Button from "../../componentes/Button";

import { HeaderText, Input, Row, Column, HidePassword, Separator } from "../../styled";

export default function CadastroTransportadorStep2({route, navigation}: any){
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [ConfirmSenha, setSenhaConfirm] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [hidePassword2, setHidePassword2] = useState(true);

	return (
		<Container>
			<KeyboardAvoidingView>
				<Row>
					<Column alignItensCenter>
						<Row justifyContentCenter>
							<Icon style={styles.iconStep} name={"checkmark-circle"} size={15} color="#FFFF00" />
							<Separator/>
							<Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#FFF" />
						</Row>

						<HeaderText>Finalizar Cadastro</HeaderText>

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
							nowrap
							>
							<Input
								placeholder='Confirmar Senha'
								secureTextEntry={hidePassword2}
								placeholderTextColor={'white'}
								autoCorrect={false}
								value={ConfirmSenha}
								onChangeText={ (text: any) => setSenhaConfirm(text)}
								autoCapitalize='none'
								/>
							<HidePassword 
								onPress={ () => setHidePassword(!hidePassword2)}>
								{ hidePassword2 ?
									<Icon name={"eye"} size={20} color="#FFF" />
									:
									<Icon name={"eye-off"} size={20} color="#FFF" />
								}
							</HidePassword>
						</Row>

						<Button 
							isPrimary 
							buttonSize={'large'}
							labelSize={'medium'} 
							onPress={() => navigation.navigate('Login')}
							>
							Concluir
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
	}
});