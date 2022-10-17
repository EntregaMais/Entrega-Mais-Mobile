import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Pressable, Animated} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import ButtonEscolha from "../../componentes/ButtonEscolha";
import NavegationHideOnScroll from "../../componentes/NavegationHideOnScroll";
import Container from '../../componentes/Container';
import {Text, Input, HeaderText, Column, Row, Separator } from "../../styled";
import Button from "../../componentes/Button";


export default function CadastroTransportadorStep1({navigation}: any) {


	const [empresa, setEmpresa] = useState('');
	const [senha, setSenha] = useState('');

	return (
		<Container>
			<KeyboardAvoidingView>
				<Row>
					<Column alignItensCenter>
						<Row justifyContentCenter>
							<Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#FFF" />
							<Separator />
							<Icon style={styles.iconStep} name={"radio-button-off-outline"} size={15} color="#dedede" />
						</Row>

						<HeaderText>Transportador</HeaderText>

						<Input
							placeholder='Empresa'
							placeholderTextColor={'white'}
							autoCorrect={false}
							value={empresa}
							onChangeText={ (text: string) => setEmpresa(text)}
						/>
						<Input
							placeholder='Nome do Responsável'
							placeholderTextColor={'white'}
							autoCorrect={false}
							//value={}
							onChangeText={ (text: string) => (text)}
						/>
						<Input
							placeholder='CPF/CNPJ'
							placeholderTextColor={'white'}
							autoCorrect={false}
							//value={}
							onChangeText={ (text: string) => (text)}
						/>
						<Input
							placeholder='Setor'
							placeholderTextColor={'white'}
							autoCorrect={false}
							//value={}
							onChangeText={ (text: string) => (text)}
						/>
						<Input
							placeholder='Vaga'
							placeholderTextColor={'white'}
							autoCorrect={false}
							//value={}
							onChangeText={ (text: string) => (text)}
						/>

						<Text>Cobra taxa de embarque?</Text>
						
						<Row>
							<Column>

								<Button 
									isPrimary 
									buttonSize={'medium'}
									labelSize={'small'} 
									>
										Sim

								</Button>
							</Column>
							<Column>
								<Button 
									buttonSize={'medium'}
									labelSize={'small'} 
									>
									Não
								</Button>
							</Column>
						</Row>
						<Input
							placeholder='Chave do Pix'
							placeholderTextColor={'white'}
							autoCorrect={false}
							//value={}
							onChangeText={ (text: string) => (text)}
						/>

						<Button 
							isPrimary 
							buttonSize={'large'}
							labelSize={'medium'} 
							onPress={() => navigation.navigate('CadastroTransportadorStep2', {paramKey: empresa})}
							>
							Prosseguir
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